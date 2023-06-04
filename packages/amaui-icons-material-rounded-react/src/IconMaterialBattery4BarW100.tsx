import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery4BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarW100'

      short_name='Battery4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-.75q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-8.7h6.3v-6h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery4BarW100.displayName = 'AmauiIconMaterialBattery4BarW100';

export default IconMaterialBattery4BarW100;
