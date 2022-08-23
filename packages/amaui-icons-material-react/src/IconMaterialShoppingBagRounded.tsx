import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBagRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagRounded'
      short_name='ShoppingBag'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 7.175 4.588 6.588Q5.175 6 6 6H8Q8 4.35 9.175 3.175Q10.35 2 12 2Q13.65 2 14.825 3.175Q16 4.35 16 6H18Q18.825 6 19.413 6.588Q20 7.175 20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM10 6H14Q14 5.175 13.413 4.588Q12.825 4 12 4Q11.175 4 10.588 4.588Q10 5.175 10 6ZM6 20H18Q18 20 18 20Q18 20 18 20V8Q18 8 18 8Q18 8 18 8H16V10Q16 10.425 15.713 10.712Q15.425 11 15 11Q14.575 11 14.288 10.712Q14 10.425 14 10V8H10V10Q10 10.425 9.713 10.712Q9.425 11 9 11Q8.575 11 8.288 10.712Q8 10.425 8 10V8H6Q6 8 6 8Q6 8 6 8V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20V8Q6 8 6 8Q6 8 6 8Q6 8 6 8Q6 8 6 8V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagRounded.displayName = 'AmauiIconMaterialShoppingBagRounded';

export default IconMaterialShoppingBagRounded;
