import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireplaceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceRoundedFilled'
      short_name='Fireplace'

      {...props}
    >
      <path d="M10.6 16.95Q11.575 17.75 12.713 17.337Q13.85 16.925 14 15.65Q14.125 14.475 13.275 13.912Q12.425 13.35 12 12.45Q11.875 12.8 11.875 13.1Q11.875 13.4 11.95 13.75Q12.025 14.175 12.125 14.55Q12.225 14.925 12.15 15.35Q12.025 15.8 11.6 16.275Q11.175 16.75 10.6 16.95ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM12.925 8.1Q13 9 13.55 9.912Q14.1 10.825 15.15 11.6Q15.975 12.2 16.488 13.012Q17 13.825 17 15Q17 15.875 16.725 16.613Q16.45 17.35 16 18H17Q17.425 18 17.712 18.288Q18 18.575 18 19V20H20V4H4V20H6V19Q6 18.575 6.287 18.288Q6.575 18 7 18H8.25Q7.675 17.275 7.338 16.475Q7 15.675 7 14.95Q7 12.8 7.975 11.087Q8.95 9.375 12.05 7.55Q12.425 7.325 12.65 7.462Q12.875 7.6 12.925 8.1Z"/>
    </Icon>
  );
});

IconMaterialFireplaceRoundedFilled.displayName = 'AmauiIconMaterialFireplaceRoundedFilled';

export default IconMaterialFireplaceRoundedFilled;
