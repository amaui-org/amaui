import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDonutLargeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeRoundedFilled'
      short_name='DonutLarge'

      {...props}
    >
      <path d="M18.975 11Q18.625 8.65 17 7Q15.375 5.35 13.025 5.05V2.05Q16.6 2.4 19.113 4.912Q21.625 7.425 21.975 11ZM13.025 21.95V18.95Q15.375 18.65 17 17Q18.625 15.35 18.975 13H21.975Q21.625 16.575 19.113 19.087Q16.6 21.6 13.025 21.95ZM11.025 21.95Q7.175 21.575 4.6 18.725Q2.025 15.875 2.025 12Q2.025 8.125 4.6 5.275Q7.175 2.425 11.025 2.05V5.05Q8.425 5.4 6.725 7.375Q5.025 9.35 5.025 12Q5.025 14.65 6.725 16.625Q8.425 18.6 11.025 18.95Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeRoundedFilled.displayName = 'AmauiIconMaterialDonutLargeRoundedFilled';

export default IconMaterialDonutLargeRoundedFilled;
