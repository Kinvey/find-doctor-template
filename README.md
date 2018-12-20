### Install the Kinvey CLI (Config Management EA Release)

1. The functionality that you need is only available in the Early Access version of the Kinvey CLI. You need to install it:
> npm install kinvey-cli@ea-config -g

2. Make sure the installation was successful:
> kinvey --version

The version should be "4.1.0-alpha.3"

### Initializing the Kinvey CLI

1. Initialize connection to the Kinvey instance (you need to specify kvy-us2 as Instance)
> kinvey init

2. Switch to the newly-created profile
> kinvey profile use {name-of-profile}

### Create a new app from the configuration file

1. Download the contents of this repository on your local machine

2. To create a new app based on the PHC template, invoke the following Kinvey CLI command:
> kinvey app create "{name-of-app}" "{repo-download-folder}/app-config.json"

At this point all the configuration that is needed for the Find a Doctor Template App should be working in the newly created app. Note, that data is not imported. JSON files with example data is included in this repo in the `import-data` folder and can be imported via the [Progress Health Cloud Console](https://healthcloud.kinvey.com).

### Generate Client App
Install nativescript

1. Create your app > tns create rhfindadoctor --template template-find-a-doctor-ng

2. Modify app/shared/config.ts to the following:

``` export class Config
{ static kinveyAppKey: string = ""; static kinveyAppSecret: string = ""; static kinveyApiHostname: string = "https://kvy-us2-baas.kinvey.com"; static kinveyMicHostname: string = "https://kvy-us2-auth.kinvey.com"; }
```

3. Run your app > tns run ios #OR tns run android
