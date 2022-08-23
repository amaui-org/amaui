import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert020RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020RoundedW100Filled'
      short_name='BatteryVert020'

      {...props}
    >
      <path d="M8.9 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-.75q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-3.7h6.3v-11h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020RoundedW100Filled.displayName = 'AmauiIconMaterialBatteryVert020RoundedW100Filled';

export default IconMaterialBatteryVert020RoundedW100Filled;
