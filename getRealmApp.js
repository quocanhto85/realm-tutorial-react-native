import Realm from "realm";

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  if (app === undefined) {
    const appId = "demo-1-nawdh";
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: "default",
        version: "0"
      }
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
