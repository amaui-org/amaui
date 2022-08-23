import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoTransferRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferRoundedW100Filled'
      short_name='NoTransfer'

      {...props}
    >
      <path d="M21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05L17 18V19.35Q17 19.5 16.9 19.6Q16.8 19.7 16.65 19.7Q16.5 19.7 16.4 19.6Q16.3 19.5 16.3 19.35V17.7H7.7V19.35Q7.7 19.5 7.6 19.6Q7.5 19.7 7.35 19.7Q7.2 19.7 7.1 19.6Q7 19.5 7 19.35V17.5Q6.5 17.375 5.9 16.663Q5.3 15.95 5.3 15V6.3L2.5 3.5Q2.4 3.4 2.388 3.262Q2.375 3.125 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.55 21.55Q21.65 21.65 21.663 21.788Q21.675 21.925 21.55 22.05ZM18.575 15.775 14.1 11.3H18V6.4H9.2L6.8 4Q7.625 3.65 8.913 3.475Q10.2 3.3 12 3.3Q15.6 3.3 17.15 3.925Q18.7 4.55 18.7 6V15Q18.7 15.2 18.663 15.387Q18.625 15.575 18.575 15.775ZM8.5 15.5Q8.925 15.5 9.213 15.212Q9.5 14.925 9.5 14.5Q9.5 14.075 9.213 13.787Q8.925 13.5 8.5 13.5Q8.075 13.5 7.788 13.787Q7.5 14.075 7.5 14.5Q7.5 14.925 7.788 15.212Q8.075 15.5 8.5 15.5ZM6 11.3H10.3L6 7Z"/>
    </Icon>
  );
});

IconMaterialNoTransferRoundedW100Filled.displayName = 'AmauiIconMaterialNoTransferRoundedW100Filled';

export default IconMaterialNoTransferRoundedW100Filled;
