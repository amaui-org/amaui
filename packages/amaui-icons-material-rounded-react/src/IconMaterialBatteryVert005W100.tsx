import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert005W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005W100'

      short_name='BatteryVert005'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-.75q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-1.7h6.3v-13h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert005W100.displayName = 'AmauiIconMaterialBatteryVert005W100';

export default IconMaterialBatteryVert005W100;
