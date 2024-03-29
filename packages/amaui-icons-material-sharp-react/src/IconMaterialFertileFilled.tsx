import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFertileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FertileFilled'

      short_name='Fertile'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576V196l241 181q31-47 70.5-97T480 176q45 50 86 101.5t72 99.5l242-181v380q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialFertileFilled.displayName = 'AmauiIconMaterialFertileFilled';

export default IconMaterialFertileFilled;
