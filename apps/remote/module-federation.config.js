const coreLibraries = new Set(['react','react-dom','react-router-dom','@mui/material', '@mf-react-state/shared/theme-hoc']);
module.exports = {
    name: 'remote',
    exposes: {
        './Module': './src/remote-entry.ts',
    },
    shared: (libraryName, defaultConfig) => {
        if (coreLibraries.has(libraryName)) {
            return defaultConfig;
        }
        // Returning false means the library is not shared.
        return false;
    },
};
