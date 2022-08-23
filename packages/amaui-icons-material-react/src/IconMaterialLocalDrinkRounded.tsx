import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalDrinkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkRounded'
      short_name='LocalDrink'

      {...props}
    >
      <path d="M7 22Q6.2 22 5.638 21.5Q5.075 21 5 20.25L3.125 3.1Q3.075 2.65 3.375 2.325Q3.675 2 4.125 2H19.875Q20.325 2 20.625 2.325Q20.925 2.65 20.875 3.1L19 20.25Q18.925 21 18.363 21.5Q17.8 22 17 22ZM5.9 10 7 20Q7 20 7 20Q7 20 7 20H17Q17 20 17 20Q17 20 17 20L18.1 10ZM5.65 8H18.35L18.75 4H5.25ZM12 19Q13.2 19 14.1 18.175Q15 17.35 15 16.15Q15 15.275 14.475 14.312Q13.95 13.35 12.875 12.025Q12.525 11.6 12 11.6Q11.475 11.6 11.125 12.025Q10.05 13.35 9.525 14.312Q9 15.275 9 16.15Q9 17.35 9.9 18.175Q10.8 19 12 19ZM18.1 10H5.9Q5.9 10 5.9 10Q5.9 10 5.9 10H18.1Q18.1 10 18.1 10Q18.1 10 18.1 10ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.725 11.275 15.15Q11.55 14.575 12 13.9Q12.45 14.6 12.725 15.162Q13 15.725 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkRounded.displayName = 'AmauiIconMaterialLocalDrinkRounded';

export default IconMaterialLocalDrinkRounded;
