import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeW100Filled'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-340h332v-172H260v172Zm412-112h28v-168H360v28h312v140ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeW100Filled.displayName = 'AmauiIconMaterialDesktopLandscapeW100Filled';

export default IconMaterialDesktopLandscapeW100Filled;
