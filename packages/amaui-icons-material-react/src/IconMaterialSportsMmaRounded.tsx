import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsMmaRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaRounded'
      short_name='SportsMma'

      {...props}
    >
      <path d="M8 21Q7.575 21 7.287 20.712Q7 20.425 7 20V17H17V20Q17 20.425 16.712 20.712Q16.425 21 16 21ZM6.825 16Q6.475 16 6.188 15.775Q5.9 15.55 5.85 15.2L5.05 11.2Q5 11.075 5 11Q5 10.925 5 10.8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V8Q17 7.575 17.288 7.287Q17.575 7 18 7Q18.425 7 18.712 7.287Q19 7.575 19 8V10.8Q19 10.925 19 11Q19 11.075 18.95 11.2L18.15 15.2Q18.075 15.55 17.8 15.775Q17.525 16 17.175 16ZM7.65 14H16.35L17 10.6V10H15V5Q15 5 15 5Q15 5 15 5H7Q7 5 7 5Q7 5 7 5V10.6ZM9 10H13Q13.425 10 13.713 9.712Q14 9.425 14 9V8Q14 7.575 13.713 7.287Q13.425 7 13 7H9Q8.575 7 8.288 7.287Q8 7.575 8 8V9Q8 9.425 8.288 9.712Q8.575 10 9 10ZM12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaRounded.displayName = 'AmauiIconMaterialSportsMmaRounded';

export default IconMaterialSportsMmaRounded;
