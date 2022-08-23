import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoTransferRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferRoundedFilled'
      short_name='NoTransfer'

      {...props}
    >
      <path d="M21.175 22.6Q20.875 22.9 20.475 22.9Q20.075 22.9 19.775 22.6L17.15 20H19.05Q18.875 20.425 18.475 20.712Q18.075 21 17.575 21Q16.925 21 16.462 20.538Q16 20.075 16 19.425V19H8V19.5Q8 20.125 7.562 20.562Q7.125 21 6.5 21Q5.875 21 5.438 20.562Q5 20.125 5 19.5V17.95Q4.55 17.45 4.275 16.837Q4 16.225 4 15.5V6.825L1.375 4.2Q1.075 3.9 1.087 3.487Q1.1 3.075 1.4 2.775Q1.7 2.475 2.113 2.475Q2.525 2.475 2.825 2.775L21.2 21.175Q21.5 21.475 21.488 21.888Q21.475 22.3 21.175 22.6ZM19.725 16.85 12.875 10H18V7H9.875L5.875 3Q6.85 2.5 8.363 2.25Q9.875 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 15.85 19.925 16.188Q19.85 16.525 19.725 16.85ZM8.5 16Q9.125 16 9.562 15.562Q10 15.125 10 14.5Q10 13.875 9.562 13.438Q9.125 13 8.5 13Q7.875 13 7.438 13.438Q7 13.875 7 14.5Q7 15.125 7.438 15.562Q7.875 16 8.5 16ZM6 10H7.175L6 8.825Z"/>
    </Icon>
  );
});

IconMaterialNoTransferRoundedFilled.displayName = 'AmauiIconMaterialNoTransferRoundedFilled';

export default IconMaterialNoTransferRoundedFilled;
