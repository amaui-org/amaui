import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalActivityRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityRoundedFilled'
      short_name='LocalActivity'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM12 13.9 13.5 15.05Q13.8 15.275 14.113 15.062Q14.425 14.85 14.3 14.5L13.7 12.6L15.375 11.3Q15.65 11.1 15.538 10.75Q15.425 10.4 15.05 10.4H13.1L12.475 8.475Q12.35 8.125 12 8.125Q11.65 8.125 11.525 8.475L10.9 10.4H8.925Q8.575 10.4 8.463 10.737Q8.35 11.075 8.625 11.3L10.25 12.6L9.65 14.525Q9.525 14.875 9.838 15.087Q10.15 15.3 10.425 15.075Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityRoundedFilled.displayName = 'AmauiIconMaterialLocalActivityRoundedFilled';

export default IconMaterialLocalActivityRoundedFilled;
