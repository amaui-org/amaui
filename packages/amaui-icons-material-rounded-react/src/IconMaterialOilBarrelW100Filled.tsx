import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOilBarrelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelW100Filled'

      short_name='OilBarrel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.9v-6.65H4.625q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.9V5H4.625q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H19.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.1v6.65h1.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.1V19h1.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 15.175q.975 0 1.663-.675.687-.675.687-1.625 0-.625-.262-1.063-.263-.437-1.088-1.387l-.425-.475q-.225-.275-.575-.275t-.575.275l-.4.475q-.825.95-1.1 1.387-.275.438-.275 1.063 0 .95.688 1.625.687.675 1.662.675Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelW100Filled.displayName = 'AmauiIconMaterialOilBarrelW100Filled';

export default IconMaterialOilBarrelW100Filled;
