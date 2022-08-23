import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedroomParentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentRoundedFilled'
      short_name='BedroomParent'

      {...props}
    >
      <path d="M5.75 17Q6.075 17 6.287 16.788Q6.5 16.575 6.5 16.25V15.5H17.5V16.25Q17.5 16.575 17.712 16.788Q17.925 17 18.25 17Q18.575 17 18.788 16.788Q19 16.575 19 16.25V13.15Q19 12.625 18.8 12.162Q18.6 11.7 18.25 11.35V9Q18.25 8.175 17.663 7.587Q17.075 7 16.25 7H13Q12.725 7 12.475 7.075Q12.225 7.15 12 7.3Q11.775 7.15 11.525 7.075Q11.275 7 11 7H7.75Q6.925 7 6.338 7.587Q5.75 8.175 5.75 9V11.35Q5.4 11.7 5.2 12.162Q5 12.625 5 13.15V16.25Q5 16.575 5.213 16.788Q5.425 17 5.75 17ZM12.75 10.5V8.5Q12.75 8.5 12.75 8.5Q12.75 8.5 12.75 8.5H16.75Q16.75 8.5 16.75 8.5Q16.75 8.5 16.75 8.5V10.5ZM7.25 10.5V8.5Q7.25 8.5 7.25 8.5Q7.25 8.5 7.25 8.5H11.25Q11.25 8.5 11.25 8.5Q11.25 8.5 11.25 8.5V10.5ZM6.5 14V13Q6.5 12.575 6.787 12.287Q7.075 12 7.5 12H16.5Q16.925 12 17.212 12.287Q17.5 12.575 17.5 13V14ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentRoundedFilled.displayName = 'AmauiIconMaterialBedroomParentRoundedFilled';

export default IconMaterialBedroomParentRoundedFilled;
