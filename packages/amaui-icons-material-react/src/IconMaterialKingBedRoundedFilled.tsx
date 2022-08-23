import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKingBedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedRoundedFilled'
      short_name='KingBed'

      {...props}
    >
      <path d="M2 17V11.975Q2 11.15 2.588 10.575Q3.175 10 4 10V7Q4 6.175 4.588 5.588Q5.175 5 6 5H18Q18.825 5 19.413 5.588Q20 6.175 20 7V10Q20.825 10 21.413 10.587Q22 11.175 22 12V17H20.65L20.175 18.5Q20.1 18.725 19.913 18.863Q19.725 19 19.5 19Q19.25 19 19.075 18.837Q18.9 18.675 18.825 18.45L18.35 17H5.65L5.175 18.5Q5.1 18.725 4.913 18.863Q4.725 19 4.5 19Q4.25 19 4.075 18.837Q3.9 18.675 3.825 18.45L3.35 17ZM13 10H18V7Q18 7 18 7Q18 7 18 7H13ZM6 10H11V7H6Q6 7 6 7Q6 7 6 7Z"/>
    </Icon>
  );
});

IconMaterialKingBedRoundedFilled.displayName = 'AmauiIconMaterialKingBedRoundedFilled';

export default IconMaterialKingBedRoundedFilled;
