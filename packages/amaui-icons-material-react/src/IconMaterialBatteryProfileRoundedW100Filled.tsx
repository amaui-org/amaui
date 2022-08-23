import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileRoundedW100Filled'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M7.05 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-.75q0-.325.212-.538.213-.212.538-.212H11q.325 0 .538.212.212.213.212.538v.75h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h6.3v-14H7Zm10.1-9.575-.4-.925-.925-.4q-.125-.05-.175-.138-.05-.087-.05-.212t.05-.213q.05-.087.175-.137l.925-.4.4-.925q.05-.125.138-.175.087-.05.212-.05t.213.05q.087.05.137.175l.4.925.925.4q.125.05.175.137.05.088.05.213t-.05.212q-.05.088-.175.138l-.925.4-.4.925q-.05.125-.137.175-.088.05-.213.05t-.212-.05q-.088-.05-.138-.175Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileRoundedW100Filled.displayName = 'AmauiIconMaterialBatteryProfileRoundedW100Filled';

export default IconMaterialBatteryProfileRoundedW100Filled;
