import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCabinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinW100Filled'

      short_name='Cabin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h12v-3H6Zm0-3.7h12v-3H6Zm0-3.7h12v-1.5l-1.975-1.5h-8.05L6 10.1Zm2.9-3.7h6.225L12 5.525ZM6.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-8.325L3.6 11.95q-.125.1-.25.075-.125-.025-.225-.15t-.087-.25q.012-.125.137-.225L5.3 9.75V7.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.6l5.55-4.225q.1-.075.212-.113.113-.037.238-.037.125 0 .238.037.112.038.212.113l8.375 6.425q.125.1.138.225.012.125-.088.25-.1.125-.225.15-.125.025-.25-.075l-1.7-1.325v8.325q0 .325-.212.537-.213.213-.538.213ZM5.625 6Q5.5 6 5.4 5.9t-.075-.225q.1-.7.575-1.163.475-.462 1.4-.462.6 0 .9-.263.3-.262.375-.687.025-.125.125-.213.1-.087.225-.087.175 0 .275.112.1.113.075.263-.125.675-.612 1.125-.488.45-1.363.45-.575 0-.887.237-.313.238-.388.638-.05.175-.15.275-.1.1-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCabinW100Filled.displayName = 'AmauiIconMaterialCabinW100Filled';

export default IconMaterialCabinW100Filled;
