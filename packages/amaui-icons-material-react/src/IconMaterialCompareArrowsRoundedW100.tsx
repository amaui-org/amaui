import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareArrowsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsRoundedW100'
      short_name='CompareArrows'

      {...props}
    >
      <path d="M15.75 12.85 12.425 9.525Q12.3 9.4 12.25 9.275Q12.2 9.15 12.2 9Q12.2 8.85 12.25 8.725Q12.3 8.6 12.425 8.475L15.75 5.15Q15.875 5.025 16 5.025Q16.125 5.025 16.25 5.15Q16.375 5.275 16.375 5.4Q16.375 5.525 16.25 5.65L13.25 8.65H21Q21.15 8.65 21.25 8.75Q21.35 8.85 21.35 9Q21.35 9.15 21.25 9.25Q21.15 9.35 21 9.35H13.25L16.25 12.35Q16.375 12.475 16.375 12.6Q16.375 12.725 16.25 12.85Q16.125 12.975 16 12.975Q15.875 12.975 15.75 12.85ZM7.75 18.85Q7.875 18.975 8 18.975Q8.125 18.975 8.25 18.85L11.575 15.525Q11.7 15.4 11.75 15.275Q11.8 15.15 11.8 15Q11.8 14.85 11.75 14.725Q11.7 14.6 11.575 14.475L8.25 11.15Q8.125 11.025 8 11.025Q7.875 11.025 7.75 11.15Q7.625 11.275 7.625 11.4Q7.625 11.525 7.75 11.65L10.75 14.65H3Q2.85 14.65 2.75 14.75Q2.65 14.85 2.65 15Q2.65 15.15 2.75 15.25Q2.85 15.35 3 15.35H10.75L7.75 18.35Q7.625 18.475 7.625 18.6Q7.625 18.725 7.75 18.85Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsRoundedW100.displayName = 'AmauiIconMaterialCompareArrowsRoundedW100';

export default IconMaterialCompareArrowsRoundedW100;
