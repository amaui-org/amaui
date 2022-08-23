import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWifiGaleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiGaleSharp'
      short_name='NestWifiGale'

      {...props}
    >
      <path d="M5 20 4.675 19H4.15Q3.275 19 2.688 18.375Q2.1 17.75 2.15 16.875L2.875 5.875Q2.925 5.075 3.5 4.537Q4.075 4 4.875 4H19.125Q19.925 4 20.5 4.537Q21.075 5.075 21.125 5.875L21.85 16.875Q21.9 17.75 21.312 18.375Q20.725 19 19.85 19H19.325L19 20ZM4.6 10H19.4L19.125 6Q19.125 6 19.125 6Q19.125 6 19.125 6H4.875Q4.875 6 4.875 6Q4.875 6 4.875 6ZM4.15 17H19.85Q19.85 17 19.85 17Q19.85 17 19.85 17L19.525 12H4.475L4.15 17Q4.15 17 4.15 17Q4.15 17 4.15 17Z"/>
    </Icon>
  );
});

IconMaterialNestWifiGaleSharp.displayName = 'AmauiIconMaterialNestWifiGaleSharp';

export default IconMaterialNestWifiGaleSharp;
