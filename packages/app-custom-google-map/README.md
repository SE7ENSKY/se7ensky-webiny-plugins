# Webiny Google Maps Plugin

Adds a Google Maps element to Webiny Page Builder.

## Setup
To activate the plugin you need to install it and import it inside your `Admin` app and inside the `Site` app. To do that, follow the two sections below.

#### Admin

Because Webiny uses a monorepo setup, you will need to run the install command from the correct app, and not from your project root folder. In your project folder navigate to `apps/admin` and install the plugin like so:

```
yarn add @se7ensky/webiny-app-page-builder-custom-google-map
```

Then inside the same folder open the file `src/plugins/index.js` and add the following import:

``` js
import googleMapsPlugin from "@se7ensky/webiny-app-page-builder-custom-google-map/admin";
```

After the import, make sure to include your plugin name inside the `plugins` array, like so:
```js
const plugins = [
    ///...,
    googleMapsPlugin ({}),
];
```

This enables the plugin in your admin.

#### Site

Enabling the plugin for the `Site` app has a similar approach. 
In your project root navigate to `apps/site` folder. There run the install command:

```
yarn add @se7ensky/webiny-app-page-builder-custom-google-map
```

Then inside the same folder open the file `src/plugins/index.js` and add the following import:

```js
import googleMapsPlugin from "@se7ensky/webiny-app-page-builder-custom-google-map/render";
```

And then register the plugin like so:

```js
const plugins = [
    ///...,
    googleMapsPlugin
];
```

This enables plugin in your public website. And that was it. Rebuild your project and the plugin should be visible.

## How to use the plugin

This plugin is available from Webiny Page Builder. Inside the Page Builder editor you'll find Google Map as one of the elements that you can now add to your pages.

By default the plugin is available under the "Basic" group. If you wish to move the plugin to another group, you can pass on the group id as a parameter when registering the plugin, like so:

```js
const plugins = [
    ///...,
    googleMapsPlugin ({groupName: 'pb-editor-element-group-custom'}),
];
```