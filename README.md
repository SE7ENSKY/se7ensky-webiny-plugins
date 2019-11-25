# SE7ENSKY CMS PLUGINS

## API
```
pageBuilder:
  component: "@webiny/serverless-page-builder"
  inputs:
    ...
    plugins:
      - ...
      - "@se7ensky/webiny-api-page-builder-page-settings-additional"
      - "@se7ensky/webiny-api-page-builder-page-settings-connections"
      - "@se7ensky/webiny-api-page-builder-unpublish-page"
```

## ADMIN
```
import adminElementGroups from "@se7ensky/webiny-app-page-builder-element-groups/admin";
import adminDuplicatePage from "@se7ensky/webiny-app-page-builder-duplicate-page/admin";
import adminUnpublishPage from "@se7ensky/webiny-app-page-builder-unpublish-page/admin";
import editorPageSettings from "@se7ensky/webiny-app-page-builder-page-settings-additional/admin";
import pageSettingsConnections from "@se7ensky/webiny-app-page-builder-page-settings-connections/admin";
import classnameBlock from "@se7ensky/webiny-app-page-builder-classname/admin";
import customGoogleMap from "@se7ensky/webiny-app-page-builder-custom-google-map/admin";
import customImageHoveredElement from "@se7ensky/webiny-app-page-builder-custom-image-hovered/admin";
import customImageLink from "@se7ensky/webiny-app-page-builder-custom-image-link/admin";
import customVideoBg from "@se7ensky/webiny-app-page-builder-custom-video-bg/admin";
import customVideo from "@se7ensky/webiny-app-page-builder-custom-video/admin";
import carouselElement from "@se7ensky/webiny-app-page-builder-images-carousel/admin";
import sliderBlock from "@se7ensky/webiny-app-page-builder-slider/admin";

const plugins = [
  ...
  adminDuplicatePage,
  adminElementGroups,
  adminUnpublishPage,
  carouselElement,
  classnameBlock,
  customGoogleMap,
  customImageHoveredElement,
  customImageLink,
  customVideo,
  customVideoBg,
  editorPageSettings,
  pageSettingsConnections,
  sliderBlock
]
```

## SITE
```
import carouselElementRender from "@se7ensky/webiny-app-page-builder-images-carousel/render";
import classnameBlockRender from "@se7ensky/webiny-app-page-builder-classname/render";
import customGoogleMapRender from "@se7ensky/webiny-app-page-builder-custom-google-map/render";
import customImageHoveredElementRender from "@se7ensky/webiny-app-page-builder-custom-image-hovered/render";
import customImageLinkRender from "@se7ensky/webiny-app-page-builder-custom-image-link/render";
import customVideoRender from "@se7ensky/webiny-app-page-builder-custom-video/render";
import customVideoBgRender from "@se7ensky/webiny-app-page-builder-custom-video-bg/render";
import pageSettingsConnections from "@se7ensky/webiny-app-page-builder-page-settings-connections/render";
import editorPageSettings from "@se7ensky/webiny-app-page-builder-page-settings-additional/render";
import sliderBlockRender from "@se7ensky/webiny-app-page-builder-slider/render";

const plugins = [
  ...
  carouselElementRender,
  classnameBlockRender,
  customGoogleMapRender,
  customImageHoveredElementRender,
  customImageLinkRender,
  customVideoRender,
  customVideoBgRender,
  pageSettingsConnections,
  editorPageSettings,
  sliderBlockRender
]
```
