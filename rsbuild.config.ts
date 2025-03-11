import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_host',
      remotes: {
        mf_header:
          'mf_header@http://localhost:3000/mf-manifest.json',
        mf_menu:
          'mf_menu@http://localhost:3005/mf-manifest.json',
        mf_login:
          'mf_login@http://localhost:3001/mf-manifest.json',
        mf_footer:
          'mf_footer@http://localhost:3003/mf-manifest.json',
        mf_home:
          'mf_home@http://localhost:3004/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});