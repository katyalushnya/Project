import Constants from "expo-constants";

function getEnvVars() {
    if (__DEV__) {
        return returnEnvVars();
    } else {
        return new Promise(resolve => {
            resolve(Constants.manifest.extra);
        });
    }
}

async function returnEnvVars() {
    return await import("./envLocal");
}

export default getEnvVars;