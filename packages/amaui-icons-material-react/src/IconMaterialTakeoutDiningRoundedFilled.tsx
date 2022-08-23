import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningRoundedFilled'
      short_name='TakeoutDining'

      {...props}
    >
      <path d="M7.8 20Q7 20 6.425 19.475Q5.85 18.95 5.8 18.15L5.3 11.55H18.7L18.2 18.15Q18.15 18.95 17.575 19.475Q17 20 16.2 20ZM4.625 10 2.725 8.15Q2.45 7.875 2.413 7.463Q2.375 7.05 2.7 6.75Q2.975 6.475 3.4 6.475Q3.825 6.475 4.1 6.75L5 7.65L4.95 7.05L8.425 3.575Q8.7 3.3 9.062 3.15Q9.425 3 9.825 3H14.175Q14.575 3 14.938 3.15Q15.3 3.3 15.575 3.575L19.05 7.05L19 7.65L19.9 6.75Q20.175 6.475 20.562 6.4Q20.95 6.325 21.3 6.75Q21.575 7.075 21.575 7.462Q21.575 7.85 21.275 8.15L19.375 10Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningRoundedFilled.displayName = 'AmauiIconMaterialTakeoutDiningRoundedFilled';

export default IconMaterialTakeoutDiningRoundedFilled;
