import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceFilled'

      short_name='Balance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h9V7.825q-.65-.225-1.125-.7T9.175 6H6l3 7q0 1.25-1.025 2.125T5.5 16q-1.45 0-2.475-.875Q2 14.25 2 13l3-7H3V4h6.175q.3-.875 1.075-1.438Q11.025 2 12 2t1.75.562q.775.563 1.075 1.438H21v2h-2l3 7q0 1.25-1.025 2.125T18.5 16q-1.45 0-2.475-.875Q15 14.25 15 13l3-7h-3.175q-.225.65-.7 1.125t-1.125.7V19h9v2Zm14.625-8h3.75L18.5 8.65Zm-13 0h3.75L5.5 8.65ZM12 6q.425 0 .713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialBalanceFilled.displayName = 'AmauiIconMaterialBalanceFilled';

export default IconMaterialBalanceFilled;
