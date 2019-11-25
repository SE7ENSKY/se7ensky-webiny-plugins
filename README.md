# SE7ENSKY CMS PLUGINS


adminDuplicatePage
1. [adminDuplicatePage](#adminduplicatepage) – page duplicator
1. [adminElementGroups](#adminelementgroups) – register new element groups in admin
1. [adminHeaderLogo](#adminheaderlogo) – add logo to admin header
1. [adminOnBoarding](#adminonboarding) – remove on boarding info
1. [adminSecurityRoles](#adminsecurityroles) – added custom roles
1. [adminUnpublishPage](#adminunpublishpage) – unpublish page
1. [animatedMedia](#animatedmedia) – media with distortion
1. [carouselElement](#carouselelement) - images carousel element
1. [classnameBlock](#classnameblock) - add block with custom className
1. [customBorderRadius](#customborderradius) - custom border-radius
1. [customGoogleMap](#customgooglemap) - add google map with settings
1. [customImageHoveredElement](#customimagehoveredelement) - add image with hover effect
1. [customImageLink](#customimagelink) - add image with link
1. [customScrollAnimation](#customscrollanimation) - animations on scroll
1. [customToggleImage](#customtoggleimage) - image toggler
1. [customVideo](#customvideo) - add video with custom settings
1. [customVideoBg](#customvideobg) - add video background
1. [editorElementSettingsTextColor](#editorelementsettingstextcolor) – text color in editor
1. [editorPageSettings](#editorpagesettings) – add new settings group in Editor Page Setting with custom params and fields
1. [object3d](#object3d) – floating 3d objects
1. [pageSettingsConnections](#pagesettingsconnections) – page connections
1. [pagesLists](#pageslists) – add custom pagesList designs
1. [sliderBlock](#sliderblock) – add slider block with custom rows
1. [tilesBoardBlock](#tilesboardblock) – add tiles board block with custom rows
1. [tickerElement](#tickerelement) - add ticket element with text

Just clone this repo into `packages/` folder.



## adminDuplicatePage

**admin:**
```javascript
import adminDuplicatePage from "se7ensky-plugins/adminDuplicatePage";

registerPlugins([
    adminDuplicatePage
]);
```


## adminElementGroups

**admin:**
```javascript
import adminElementGroups from "se7ensky-plugins/adminElementGroups";

registerPlugins([
    adminElementGroups
]);
```


## adminHeaderLogo

**admin:**
```javascript
import adminHeaderLogo from "se7ensky-plugins/adminHeaderLogo";

registerPlugins([
    adminHeaderLogo
]);
```


## adminOnBoarding

**admin:**
```javascript
import adminOnBoarding from "se7ensky-plugins/adminOnBoarding";

registerPlugins([
    adminOnBoarding
]);
```

## adminSecurityRoles `v1`
**admin:**
```javascript
import securityRoles from "se7ensky-plugins/adminSecurityRoles/admin";

registerPlugins([
    securityRoles,
  	{
  		name: "security-roles-designer",
  		type: "security-roles",
  		role: "designer",
  		categories: ["5d31c00b2a0f55000c70375f", "5d31c01c2a0f55000c703760"] //categories id
  	}
]);
```

**api:**
```javascript
import securityRoles from "se7ensky-plugins/adminSecurityRoles/api";

registerPlugins([
    securityRoles,
]);
```


## adminUnpublishPage `v1`
**admin:**
```javascript
import adminUnpublishPage from "se7ensky-plugins/adminUnpublishPage/admin";

registerPlugins([
    adminUnpublishPage
]);
```

**api:**
```javascript
import adminUnpublishPage from "se7ensky-plugins/adminUnpublishPage/api";

registerPlugins([
    adminUnpublishPage,
]);
```


## animatedMedia

**admin:**
```javascript
import animatedMedia from "se7ensky-plugins/animatedMedia/admin";

registerPlugins([
    animatedMedia
]);
```

**site:**
```javascript
import animatedMediaRender from "se7ensky-plugins/animatedMedia/render";

registerPlugins([
    animatedMediaRender
]);
```


## carouselElement

**admin:**
```javascript
import carouselElement from "se7ensky-plugins/carouselElement/admin";

registerPlugins([
    carouselElement
]);
```

**site:**
```javascript
import carouselElementRender from "se7ensky-plugins/carouselElement/render";

registerPlugins([
    carouselElementRender
]);
```


## classnameBlock

**admin:**
```javascript
import classnameBlock from "se7ensky-plugins/classnameBlock/admin";

registerPlugins([
    classnameBlock
]);
```

**site:**
```javascript
import classnameBlockRender from "se7ensky-plugins/classnameBlock/render";

registerPlugins([
    classnameBlockRender
]);
```


## customBorderRadius

**admin:**
```javascript
import customBorderRadius from "se7ensky-plugins/customBorderRadius/admin";

registerPlugins([
    customBorderRadius
]);
```

**site:**
```javascript
import customBorderRadiusRender from "se7ensky-plugins/customBorderRadius/render";

registerPlugins([
    customBorderRadiusRender
]);
```


## customGoogleMap

**admin:**
```javascript
import customGoogleMap from "se7ensky-plugins/customGoogleMap/admin";

registerPlugins([
    customGoogleMap,
]);
```

**site:**
```javascript
import customGoogleMapRender from "se7ensky-plugins/customGoogleMap/render";

registerPlugins([
    customGoogleMapRender
]);
```



## customImageHoveredElement

**admin:**
```javascript
import customImageHoveredElement from "se7ensky-plugins/customImageHoveredElement/admin";

registerPlugins([
    customImageHoveredElement
]);
```

**site:**
```javascript
import customImageHoveredElementRender from "se7ensky-plugins/customImageHoveredElement/render";

registerPlugins([
    customImageHoveredElementRender
]);
```



## customImageLink

**admin:**
```javascript
import customImageLink from "se7ensky-plugins/customImageLink/admin";

registerPlugins([
    customImageLink
]);
```

**site:**
```javascript
import customImageLinkRender from "se7ensky-plugins/customImageLink/render";

registerPlugins([
    customImageLinkRender
]);
```



## customScrollAnimation

**admin:**
```javascript
import customScrollAnimation from "se7ensky-plugins/customScrollAnimation/admin";

registerPlugins([
    customScrollAnimation
]);
```

**site:**
```javascript
import customScrollAnimationRender from "se7ensky-plugins/customScrollAnimation/render";

registerPlugins([
    customScrollAnimationRender
]);
```



## customToggleImage

**admin:**
```javascript
import customToggleImage from "se7ensky-plugins/customToggleImage/admin";

registerPlugins([
    customToggleImage
]);
```

**site:**
```javascript
import customToggleImageRender from "se7ensky-plugins/customToggleImage/render";

registerPlugins([
    customToggleImageRender
]);
```



## customVideo

**admin:**
```javascript
import customVideo from "se7ensky-plugins/customVideo/admin";

registerPlugins([
    customVideo
]);
```

**site:**
```javascript
import customVideoRender from "se7ensky-plugins/customVideo/render";

registerPlugins([
    customVideoRender
]);
```



## customVideoBg

**admin:**
```javascript
import customVideoBg from "se7ensky-plugins/customVideoBg/admin";

registerPlugins([
    customVideoBg
]);
```

**site:**
```javascript
import customVideoBgRender from "se7ensky-plugins/customVideoBg/render";

registerPlugins([
    customVideoRender
]);
```



## editorElementSettingsTextColor

**admin:**
```javascript
import editorElementSettingsTextColor from "se7ensky-plugins/editorElementSettingsTextColor/admin";

registerPlugins([
    editorElementSettingsTextColor
]);
```



## editorPageSettings `v1`

**admin:**
```javascript
import editorPageSettings from "se7ensky-plugins/editorPageSettings/admin";

registerPlugins([
    editorPageSettings
]);
```

**site:**
```javascript
import editorPageSettings from "se7ensky-plugins/src/editorPageSettings/render";

registerPlugins([
    editorPageSettings
]);
```

**api:**
```javascript
import editorPageSettings from "se7ensky-plugins/editorPageSettings/api";

registerPlugins([
    editorPageSettings
]);
```



## object3d

**admin:**
```javascript
import object3d from "se7ensky-plugins/object3d/admin";

registerPlugins([
    object3d
]);
```

**site:**
```javascript
import object3dRender from "se7ensky-plugins/object3d/render";

registerPlugins([
    object3dRender
]);
```



## pageSettingsConnections `v1`

**admin:**
```javascript
import pageSettingsConnections from "se7ensky-plugins/pageSettingsConnections/admin";

registerPlugins([
    pageSettingsConnections
]);
```

**api:**
```javascript
import pageSettingsConnections from "se7ensky-plugins/pageSettingsConnections/api";

registerPlugins([
    pageSettingsConnections
]);
```

**site:**
```javascript
import pageSettingsConnectionsRender from "se7ensky-plugins/pageSettingsConnections/render";

registerPlugins([
    pageSettingsConnectionsRender
]);
```





## pagesLists

**admin:**
```javascript
import pagesLists from "se7ensky-plugins/pagesLists";

registerPlugins([
    pagesLists
]);
```

**site:**
```javascript
import pagesLists from "se7ensky-plugins/pagesLists";

registerPlugins([
    pagesLists
]);
```



## sliderBlock

**admin:**
```javascript
import sliderBlock from "se7ensky-plugins/sliderBlock/admin";

registerPlugins([
    sliderBlock
]);
```

**site:**
```javascript
import sliderBlockRender from "se7ensky-plugins/sliderBlock/render";

registerPlugins([
    sliderBlockRender
]);
```



## tickerElement

**admin:**
```javascript
import tickerElement from "se7ensky-plugins/tickerElement/admin";

registerPlugins([
    tickerElement,
]);
```

**site:**
```javascript
import tickerElementRender from "se7ensky-plugins/tickerElement/render";

registerPlugins([
    tickerElementRender
]);
```



## tilesBoardBlock

**admin:**
```javascript
import tilesBoardBlock from "se7ensky-plugins/tilesBoardBlock/admin";

registerPlugins([
    tilesBoardBlock,
]);
```

**site:**
```javascript
import tilesBoardBlockRender from "se7ensky-plugins/tilesBoardBlock/render";

registerPlugins([
    tilesBoardBlockRender
]);
```
