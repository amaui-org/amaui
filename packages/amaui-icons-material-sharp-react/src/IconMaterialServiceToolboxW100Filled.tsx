import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialServiceToolboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolboxW100Filled'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-204h174v40h28v-40h292v40h28v-40h174v204H132Zm4-232 99-224h107v-48q0-11 8.5-19.5T370-744h220q11 0 19.5 8.5T618-716v48h107l99 224H654v-40h-28v40H334v-40h-28v40H136Zm234-224h220v-48H370v48Z"/>
    </Icon>
  );
});

IconMaterialServiceToolboxW100Filled.displayName = 'AmauiIconMaterialServiceToolboxW100Filled';

export default IconMaterialServiceToolboxW100Filled;
