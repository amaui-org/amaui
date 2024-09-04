import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeFilled'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h360v-200H240v200Zm420-120h60v-200H360v60h300v140ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeFilled.displayName = 'AmauiIconMaterialDesktopLandscapeFilled';

export default IconMaterialDesktopLandscapeFilled;
