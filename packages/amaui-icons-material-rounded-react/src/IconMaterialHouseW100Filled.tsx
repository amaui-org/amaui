import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100Filled'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 18.7H7.05q-.325 0-.537-.213-.213-.212-.213-.537v-7h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.488-.2.287 0 .412.125l3.8 3.425v-2.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.9l1.2 1.1q.2.2.1.45t-.375.25H17.7v7q0 .325-.212.537-.213.213-.538.213H13.5v-4.25q0-.325-.212-.538-.213-.212-.538-.212h-1.5q-.325 0-.537.212-.213.213-.213.538Zm-.25-8.7h3.5q0-.675-.525-1.113Q12.7 8.45 12 8.45q-.7 0-1.225.437-.525.438-.525 1.113Z"/>
    </Icon>
  );
});

IconMaterialHouseW100Filled.displayName = 'AmauiIconMaterialHouseW100Filled';

export default IconMaterialHouseW100Filled;
