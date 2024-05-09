# Libruh

# Roadmap

- [ ] Login/Landing
  - [x] Login.tsx
    - [x] LandingPage.tsx
    - [ ] SelectRegister.tsx
    - [x] SynergiaLogin.tsx
    - [x] SynergiaLoginEasterEgg.tsx
- [ ] Main UI
  - [x] Main.tsx
    - [ ] Home.tsx
    - [ ] Grades.tsx
    - [ ] Attendance.tsx
    - [ ] Timetable.tsx
    - [ ] Messages.tsx
    - [ ] Homework.tsx
    - [ ] Other
      - [ ] Annoucements.tsx
      - [ ] Settings.tsx
- [ ] Misc UI
  - [ ] Settings
    - [ ] HomeSettings.tsx
    - [ ] GradeSettings.tsx
    - [ ] AttendanceSettings.tsx
    - [ ] TimetableSettings.tsx
    - [ ] MessageSettings.tsx
    - [ ] HomeworkSettings.tsx
  - [ ] About Libruh
    - [x] AboutApp.tsx
    - [x] Acknowledgements.tsx
    - [ ] Authors.tsx
    - [x] VersionsModal.tsx
    - [ ] Changelog.tsx
      - [ ] Pulling Changelog from GitLab
- [ ] Synergia API
  - [ ] Logging in and storing token
  - [ ] Checking user's school data
  - [ ] Pulling the Timetable
    - [ ] Current week
    - [ ] Select period
  - [ ] Pulling the Grades
    - [ ] Semester 1
    - [ ] Semester 2
  - [ ] Pulling the Attendance
    - [ ] Semester 1
    - [ ] Semester 2
    - [ ] Overall
  - [ ] Messages
    - [ ] Pulling the Messages
    - [ ] Mark as read/unread
    - [ ] Sending messages
      - [ ] if possible, bypass "Mobilne Dodatki" requirement
  - [ ] Homework
    - [ ] Pulling the Homework
    - [ ] Mark as read/unread
    - [ ] Sending in Homework
  - [ ] Annoucements

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## **BTW React Native prefers Yarn so just use yarn to make it work**

## Step 1: Start the Expo server

First, you will need to start **Expo**.

To start expo, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm run start
```

Then, when open, switch to Expo Go mode for testing the App.

## Step 2: Start your Application

Let Expo run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
