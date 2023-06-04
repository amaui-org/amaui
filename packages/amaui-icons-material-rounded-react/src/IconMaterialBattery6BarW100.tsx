import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery6BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarW100'

      short_name='Battery6Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-.75q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-12.7h6.3v-2h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery6BarW100.displayName = 'AmauiIconMaterialBattery6BarW100';

export default IconMaterialBattery6BarW100;
