import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          schedule: path.resolve(import.meta.dirname, 'schedule.html'),
          panelMembers: path.resolve(import.meta.dirname, 'panel-members.html'),
          organizingCommittee: path.resolve(import.meta.dirname, 'organizing-committee.html'),
          venueContact: path.resolve(import.meta.dirname, 'venue-contact.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
