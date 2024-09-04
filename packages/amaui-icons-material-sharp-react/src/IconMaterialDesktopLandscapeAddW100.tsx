import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAddW100'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 480Zm100-100v-172h332v172H260ZM132-212v-536h696v288h-28v-260H160v480h360v28H132Zm540-248v-132H360v-28h340v160h-28Zm48 328v-100H620v-28h100v-100h28v100h100v28H748v100h-28Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAddW100.displayName = 'AmauiIconMaterialDesktopLandscapeAddW100';

export default IconMaterialDesktopLandscapeAddW100;
