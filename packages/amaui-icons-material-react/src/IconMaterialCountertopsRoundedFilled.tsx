import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCountertopsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsRoundedFilled'
      short_name='Countertops'

      {...props}
    >
      <path d="M5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V12H3Q2.575 12 2.288 11.712Q2 11.425 2 11Q2 10.575 2.288 10.287Q2.575 10 3 10H6Q5.175 10 4.588 9.412Q4 8.825 4 8V5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9.425 4 9.713 4.287Q10 4.575 10 5V8Q10 8.825 9.413 9.412Q8.825 10 8 10H16V7Q16 6.575 15.713 6.287Q15.425 6 15 6Q14.725 6 14.5 6.137Q14.275 6.275 14.075 6.55Q13.9 6.8 13.688 6.9Q13.475 7 13.275 7Q12.625 7 12.363 6.512Q12.1 6.025 12.425 5.475Q12.825 4.825 13.5 4.412Q14.175 4 15 4Q16.25 4 17.125 4.875Q18 5.75 18 7V10H21Q21.425 10 21.712 10.287Q22 10.575 22 11Q22 11.425 21.712 11.712Q21.425 12 21 12H20V19Q20 19.425 19.712 19.712Q19.425 20 19 20ZM11 18H13V12H11Z"/>
    </Icon>
  );
});

IconMaterialCountertopsRoundedFilled.displayName = 'AmauiIconMaterialCountertopsRoundedFilled';

export default IconMaterialCountertopsRoundedFilled;
