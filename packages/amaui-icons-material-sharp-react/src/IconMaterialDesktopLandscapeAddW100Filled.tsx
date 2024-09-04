import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAddW100Filled'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v310q-21-11-44.5-16.5t-49.8-5.5q-9.04 0-17.26.5-8.22.5-16.44 2.5v-163H360v28h312v141q-23 7-43 18.5T592-406v-106H260v172h282q-11 21-16.5 44.5T520-246q0 9.04.69 17.43T523-212H132Zm588 80v-100H620v-28h100v-100h28v100h100v28H748v100h-28Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAddW100Filled.displayName = 'AmauiIconMaterialDesktopLandscapeAddW100Filled';

export default IconMaterialDesktopLandscapeAddW100Filled;
