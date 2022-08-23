import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltRounded'
      short_name='ChairAlt'

      {...props}
    >
      <path d="M7 18V20Q7 20.425 6.713 20.712Q6.425 21 6 21Q5.575 21 5.287 20.712Q5 20.425 5 20V14Q5 13.175 5.588 12.587Q6.175 12 7 12H8V10H7Q6.175 10 5.588 9.412Q5 8.825 5 8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V8Q19 8.825 18.413 9.412Q17.825 10 17 10H16V12H17Q17.825 12 18.413 12.587Q19 13.175 19 14V20Q19 20.425 18.712 20.712Q18.425 21 18 21Q17.575 21 17.288 20.712Q17 20.425 17 20V18ZM7 8H17Q17 8 17 8Q17 8 17 8V5Q17 5 17 5Q17 5 17 5H7Q7 5 7 5Q7 5 7 5V8Q7 8 7 8Q7 8 7 8ZM10 12H14V10H10ZM7 16H17V14Q17 14 17 14Q17 14 17 14H7Q7 14 7 14Q7 14 7 14ZM7 8Q7 8 7 8Q7 8 7 8V5Q7 5 7 5Q7 5 7 5Q7 5 7 5Q7 5 7 5V8Q7 8 7 8Q7 8 7 8ZM7 16V14Q7 14 7 14Q7 14 7 14Q7 14 7 14Q7 14 7 14V16Z"/>
    </Icon>
  );
});

IconMaterialChairAltRounded.displayName = 'AmauiIconMaterialChairAltRounded';

export default IconMaterialChairAltRounded;
