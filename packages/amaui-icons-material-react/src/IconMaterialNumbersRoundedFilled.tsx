import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNumbersRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NumbersRoundedFilled'
      short_name='Numbers'

      {...props}
    >
      <path d="M9 16 8.175 19.275Q8.1 19.6 7.85 19.8Q7.6 20 7.25 20Q6.775 20 6.475 19.625Q6.175 19.25 6.3 18.8L7 16H4.275Q3.775 16 3.475 15.613Q3.175 15.225 3.3 14.75Q3.375 14.4 3.65 14.2Q3.925 14 4.275 14H7.5L8.5 10H5.775Q5.275 10 4.975 9.613Q4.675 9.225 4.8 8.75Q4.875 8.4 5.15 8.2Q5.425 8 5.775 8H9L9.825 4.725Q9.9 4.4 10.15 4.2Q10.4 4 10.75 4Q11.225 4 11.525 4.375Q11.825 4.75 11.7 5.2L11 8H15L15.825 4.725Q15.9 4.4 16.15 4.2Q16.4 4 16.75 4Q17.225 4 17.525 4.375Q17.825 4.75 17.7 5.2L17 8H19.725Q20.225 8 20.525 8.387Q20.825 8.775 20.7 9.25Q20.625 9.6 20.35 9.8Q20.075 10 19.725 10H16.5L15.5 14H18.225Q18.725 14 19.025 14.387Q19.325 14.775 19.2 15.25Q19.125 15.6 18.85 15.8Q18.575 16 18.225 16H15L14.175 19.275Q14.1 19.6 13.85 19.8Q13.6 20 13.25 20Q12.775 20 12.475 19.625Q12.175 19.25 12.3 18.8L13 16ZM9.5 14H13.5L14.5 10H10.5Z"/>
    </Icon>
  );
});

IconMaterialNumbersRoundedFilled.displayName = 'AmauiIconMaterialNumbersRoundedFilled';

export default IconMaterialNumbersRoundedFilled;
