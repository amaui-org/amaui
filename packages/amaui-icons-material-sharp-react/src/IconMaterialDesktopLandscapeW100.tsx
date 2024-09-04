import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeW100'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-340h332v-172H260v172Zm412-112h28v-168H360v28h312v140ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeW100.displayName = 'AmauiIconMaterialDesktopLandscapeW100';

export default IconMaterialDesktopLandscapeW100;
