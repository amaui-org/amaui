import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeRoundedFilled'
      short_name='PriceChange'

      {...props}
    >
      <path d="M7 16H8Q8 16.425 8.288 16.712Q8.575 17 9 17Q9.425 17 9.713 16.712Q10 16.425 10 16H11Q11.425 16 11.713 15.712Q12 15.425 12 15V12Q12 11.575 11.713 11.287Q11.425 11 11 11H8V10H11.025Q11.45 10 11.725 9.712Q12 9.425 12 9Q12 8.575 11.713 8.287Q11.425 8 11 8H10Q10 7.575 9.713 7.287Q9.425 7 9 7Q8.575 7 8.288 7.287Q8 7.575 8 8H7Q6.575 8 6.287 8.287Q6 8.575 6 9V12Q6 12.425 6.287 12.712Q6.575 13 7 13H10V14H6.975Q6.55 14 6.275 14.287Q6 14.575 6 15Q6 15.425 6.287 15.712Q6.575 16 7 16ZM15.65 15.9Q15.8 16.05 16 16.05Q16.2 16.05 16.35 15.9L18 14.25H14ZM14 10H18L16.35 8.35Q16.2 8.2 16 8.2Q15.8 8.2 15.65 8.35ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeRoundedFilled.displayName = 'AmauiIconMaterialPriceChangeRoundedFilled';

export default IconMaterialPriceChangeRoundedFilled;
