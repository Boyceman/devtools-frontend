// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as EmulationModule from './emulation.js';

self.Emulation = self.Emulation || {};
Emulation = Emulation || {};

/**
 * @constructor
 */
Emulation.AdvancedApp = EmulationModule.AdvancedApp.AdvancedApp;

/**
 * @constructor
 */
Emulation.AdvancedAppProvider = EmulationModule.AdvancedApp.AdvancedAppProvider;

/**
 * @constructor
 */
Emulation.DeviceModeModel = EmulationModule.DeviceModeModel.DeviceModeModel;

/** @enum {string} */
Emulation.DeviceModeModel.Type = EmulationModule.DeviceModeModel.Type;

/**
 * @constructor
 */
Emulation.DeviceModeView = EmulationModule.DeviceModeView.DeviceModeView;

/**
 * @constructor
 */
Emulation.DeviceModeWrapper = EmulationModule.DeviceModeWrapper.DeviceModeWrapper;

/**
 * @constructor
 */
Emulation.DeviceModeWrapper.ActionDelegate = EmulationModule.DeviceModeWrapper.ActionDelegate;

/**
 * @constructor
 */
Emulation.DevicesSettingsTab = EmulationModule.DevicesSettingsTab.DevicesSettingsTab;

/**
 * @constructor
 */
Emulation.EmulatedDevice = EmulationModule.EmulatedDevices.EmulatedDevice;

/**
 * @constructor
 */
Emulation.EmulatedDevicesList = EmulationModule.EmulatedDevices.EmulatedDevicesList;

/**
 * @constructor
 */
Emulation.GeolocationsSettingsTab = EmulationModule.GeolocationsSettingsTab.GeolocationsSettingsTab;

/**
 * @constructor
 */
Emulation.InspectedPagePlaceholder = EmulationModule.InspectedPagePlaceholder.InspectedPagePlaceholder;

Emulation.InspectedPagePlaceholder.instance = EmulationModule.InspectedPagePlaceholder.instance;

/**
 * @constructor
 */
Emulation.MediaQueryInspector = EmulationModule.MediaQueryInspector.MediaQueryInspector;

/**
 * @constructor
 */
Emulation.SensorsView = EmulationModule.SensorsView.SensorsView;

/**
 * @constructor
 */
Emulation.SensorsView.ShowActionDelegate = EmulationModule.SensorsView.ShowActionDelegate;

/** @typedef {!{title: string, orientation: string, insets: !UI.Insets, image: ?string}} */
Emulation.EmulatedDevice.Mode;

/** @typedef {!{width: number, height: number, outlineInsets: ?UI.Insets, outlineImage: ?string}} */
Emulation.EmulatedDevice.Orientation;

/** @typedef {{title: string, lat: number, long: number}} */
Emulation.GeolocationsSettingsTab.Item;
