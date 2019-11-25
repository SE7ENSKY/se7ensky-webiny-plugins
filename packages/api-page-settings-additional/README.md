# SE7ENSKY WEBINY PLUGIN

## Install
```
yarn add webiny-plugin-name....
```

## Setup
To setup, you must register a set of plugins. For more information on
plugins, please visit [Webiny documentation](https://docs.webiny.com/docs/developer-tutorials/plugins-crash-course).

#### Admin
```
import pluginName from "webiny-plugin-name..../admin"
import { registerPlugins } from "@webiny/plugins";

registerPlugins(...pluginName);
```

This enables plugin in your admin.

#### Site
```
import pluginName from "webiny-plugin-name..../render"
import { registerPlugins } from "@webiny/plugins";

registerPlugins(..pluginName);
```

This enables plugin in your public website.
