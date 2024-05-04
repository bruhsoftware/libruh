import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'Libruh',
  slug: 'libruh',
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  experiments: {
    tsconfigPaths: true
  },
  ios: {
    bundleIdentifier: "pl.bruhsoftware.libruh"
  }
};

export default config;
