import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedRoundedFilled'
      short_name='SingleBed'

      {...props}
    >
      <path d="M4 17V11.975Q4 11.15 4.588 10.575Q5.175 10 6 10V7Q6 6.175 6.588 5.588Q7.175 5 8 5H16Q16.825 5 17.413 5.588Q18 6.175 18 7V10Q18.825 10 19.413 10.587Q20 11.175 20 12V17H18.65L18.175 18.5Q18.1 18.725 17.913 18.863Q17.725 19 17.5 19Q17.25 19 17.075 18.837Q16.9 18.675 16.825 18.45L16.35 17H7.65L7.175 18.5Q7.1 18.725 6.913 18.863Q6.725 19 6.5 19Q6.25 19 6.075 18.837Q5.9 18.675 5.825 18.45L5.35 17ZM13 10H16V7Q16 7 16 7Q16 7 16 7H13ZM8 10H11V7H8Q8 7 8 7Q8 7 8 7Z"/>
    </Icon>
  );
});

IconMaterialSingleBedRoundedFilled.displayName = 'AmauiIconMaterialSingleBedRoundedFilled';

export default IconMaterialSingleBedRoundedFilled;
