import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTwoWheelerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheelerSharpFilled'
      short_name='TwoWheeler'

      {...props}
    >
      <path d="M4 19Q2.35 19 1.175 17.825Q0 16.65 0 15Q0 13.575 0.913 12.475Q1.825 11.375 3.25 11.1L2.55 10.5H0V9H4.5L7 10.5L11 9H14.15L12.6 7H10V5H13.55L15.65 7.7L19 6V9H16.7L18.45 11.3Q18.825 11.15 19.212 11.075Q19.6 11 20 11Q21.65 11 22.825 12.175Q24 13.35 24 15Q24 16.65 22.825 17.825Q21.65 19 20 19Q18.35 19 17.175 17.825Q16 16.65 16 15Q16 14.325 16.238 13.688Q16.475 13.05 16.9 12.5L16.4 11.9L13 17H10L8 15.25Q7.875 16.825 6.725 17.913Q5.575 19 4 19ZM4 17Q4.825 17 5.412 16.413Q6 15.825 6 15Q6 14.175 5.412 13.587Q4.825 13 4 13Q3.175 13 2.588 13.587Q2 14.175 2 15Q2 15.825 2.588 16.413Q3.175 17 4 17ZM20 17Q20.825 17 21.413 16.413Q22 15.825 22 15Q22 14.175 21.413 13.587Q20.825 13 20 13Q19.175 13 18.587 13.587Q18 14.175 18 15Q18 15.825 18.587 16.413Q19.175 17 20 17Z"/>
    </Icon>
  );
});

IconMaterialTwoWheelerSharpFilled.displayName = 'AmauiIconMaterialTwoWheelerSharpFilled';

export default IconMaterialTwoWheelerSharpFilled;
