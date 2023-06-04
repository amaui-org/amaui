import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCottageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageW100Filled'

      short_name='Cottage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.625 6Q5.5 6 5.4 5.9t-.075-.225q.1-.7.575-1.163.475-.462 1.4-.462.6 0 .9-.263.3-.262.375-.687.025-.125.125-.213.1-.087.225-.087.175 0 .275.112.1.113.075.263-.125.675-.612 1.125-.488.45-1.363.45-.575 0-.887.237-.313.238-.388.638-.05.175-.15.275-.1.1-.25.1Zm.425 13.7q-.325 0-.537-.213-.213-.212-.213-.537v-8.325L3.6 11.95q-.125.1-.25.075-.125-.025-.225-.15t-.087-.25q.012-.125.137-.225L5.3 9.75V7.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.6l5.55-4.225q.1-.075.212-.113.113-.037.238-.037.125 0 .238.037.112.038.212.113l8.375 6.425q.125.1.138.225.012.125-.088.25-.1.125-.225.15-.125.025-.25-.075l-1.7-1.325v8.325q0 .325-.212.537-.213.213-.538.213H13.5v-4.2q0-.625-.438-1.062Q12.625 14 12 14t-1.062.438q-.438.437-.438 1.062v4.2Z"/>
    </Icon>
  );
});

IconMaterialCottageW100Filled.displayName = 'AmauiIconMaterialCottageW100Filled';

export default IconMaterialCottageW100Filled;
