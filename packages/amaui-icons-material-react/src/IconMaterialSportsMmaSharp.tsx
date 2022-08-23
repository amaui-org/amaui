import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsMmaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaSharp'
      short_name='SportsMma'

      {...props}
    >
      <path d="M7 21V17H17V21ZM6 16 5.05 11.2Q5 11.075 5 11Q5 10.925 5 10.8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V8Q17 7.575 17.288 7.287Q17.575 7 18 7Q18.425 7 18.712 7.287Q19 7.575 19 8V10.8Q19 10.925 19 11Q19 11.075 18.95 11.2L18 16ZM7.65 14H16.35L17 10.6V10H15V5Q15 5 15 5Q15 5 15 5H7Q7 5 7 5Q7 5 7 5V10.6ZM8 10H14V7H8ZM12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaSharp.displayName = 'AmauiIconMaterialSportsMmaSharp';

export default IconMaterialSportsMmaSharp;
