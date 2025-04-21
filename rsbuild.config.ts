import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { enviroments } from './src/common/config/enviroments';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_host',
      remotes: {
        mf_header:
          `mf_header@${enviroments.HOST_HEADER}/mf-manifest.json`,
        mf_menu:
          `mf_menu@${enviroments.HOST_MENU}/mf-manifest.json`,
        mf_footer:
          `mf_footer@${enviroments.HOST_FOOTER}/mf-manifest.json`,
        mf_home:
          `mf_home@${enviroments.HOST_HOME}/mf-manifest.json`,
      },
      exposes: {
        './prueba': './src/components/Prueba.tsx',
        './httpsclient': './src/common/api/apiclinica.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});