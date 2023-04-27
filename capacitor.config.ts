import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'puree-wrpl',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.18.26:3000',
    cleartext: true
  }
};

export default config;
