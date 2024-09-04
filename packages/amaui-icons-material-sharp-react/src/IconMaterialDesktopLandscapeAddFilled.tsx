import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAddFilled'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v351q-26-15-56.5-23t-62.5-8q-11 0-21 .5t-20 2.5v-163H360v60h300v122q-17 8-31.5 17.5T600-419v-101H240v200h294q-7 19-10.5 39.5T520-239q0 21 3 40.5t10 38.5H80Zm640 80v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAddFilled.displayName = 'AmauiIconMaterialDesktopLandscapeAddFilled';

export default IconMaterialDesktopLandscapeAddFilled;
