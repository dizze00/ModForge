const { MicrosoftAuth } = require("minecraft-java-core");

const auth = new MicrosoftAuth();

async function loginMicrosoft() {
  try {
    return await auth.launch("ModForge Launcher");
  } catch (e) {
    console.error("Login failed:", e);
    return null;
  }
}

module.exports = { loginMicrosoft };
