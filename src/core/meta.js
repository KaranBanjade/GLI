const { boilerplates, requirements } = require("../meta/boilerplate");
const execute = require("../utils/execute");
const print = require("../utils/print");
const readline = require("readline");
const { osMap } = require("../meta/osMapper");
const os = require("os");

const requirementsInstaller = async (requirements) => {
  const OS = osMap.find((OS) => OS.id == os.type());
  for (const req of requirements) {
    try {
      let cmdSuccess = await execute(OS.installers[req], `Installing ${req}`);
      if (!cmdSuccess) return false;
      else {
        print(`Installed ${req}`, "green");
      }
    } catch (err) {
      print(`Failed to install ${req}`, "red");
      return false;
    }
  }
  return true;
};

const checkRequirements = async (commandRequirements, coreRequirements) => {
  for (const req of commandRequirements) {
    try {
      let cmdSuccess = await execute(coreRequirements[req], `Checking for ${req}`);
      if (!cmdSuccess) {
        await new Promise((resolve) => {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          rl.question(`Do you want to install ${req}? (y/n) `, async (resp) => {
            if (resp.toLowerCase() === "y") {
              cmdSuccess = await requirementsInstaller([req]);
              if (cmdSuccess) {
                print(`${req} installed`, "green");
              } else {
                print(`${req} installation failed`, "red");
              }
            }
            rl.close();
            resolve(cmdSuccess); 
          });
        });
        if (!cmdSuccess) return false;
      }
    } catch (err) {
      print(`Error while checking requirements for ${req}`, "red");
      return false;
    }
  }
  return true;
};

module.exports = async function (meta, id) {
  let bp = boilerplates.find((bp) => bp.id == id);
  let isReqMet = await checkRequirements(bp.requirements, requirements);
  if (isReqMet) {
    let init = true;
    for (let cmd of bp.commands) {
      Object.keys(meta).forEach((key) => {
        if (cmd.includes(`{${key}}`) && meta[key]) {
          cmd = cmd.replace(`{${key}}`, meta[key]);
        }
      });
      cmd = cmd.replace(/{.*}/g, "");
      let cmdSuccess = await execute(cmd, `Initializing ${bp.id}`);
      init = init && cmdSuccess;
    }
    if (init) print(`Initialized ${bp.id}`, "green");
  } else {
    print("Requirements not met", "red");
  }
};
