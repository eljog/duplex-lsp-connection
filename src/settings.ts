/**
 * @typedef {Object} DLCSettings - Settings for the DLC extension.
 * @property {boolean} noReject - If true, the promise will not be rejected if the write fails.
 * 
 */
export interface DLCSettings {
    noReject: boolean;
}

let defaultSettings: DLCSettings = {
    noReject: true
};

export function overrideSettings(settings: DLCSettings) {
    defaultSettings = { ...defaultSettings, ...settings };
}

export function getSettings(): DLCSettings {
    return defaultSettings;
}
