import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelRounded'
      short_name='CardTravel'

      {...props}
    >
      <path d="M4 17V19Q4 19 4 19Q4 19 4 19H20Q20 19 20 19Q20 19 20 19V17ZM7 6V4Q7 3.175 7.588 2.587Q8.175 2 9 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6ZM4 14H20V8Q20 8 20 8Q20 8 20 8H17V9.025Q17 9.45 16.712 9.725Q16.425 10 16 10Q15.575 10 15.288 9.712Q15 9.425 15 9V8H9V9.025Q9 9.45 8.713 9.725Q8.425 10 8 10Q7.575 10 7.287 9.712Q7 9.425 7 9V8H4Q4 8 4 8Q4 8 4 8ZM9 6H15V4Q15 4 15 4Q15 4 15 4H9Q9 4 9 4Q9 4 9 4ZM4 19V8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19Q4 19 4 19Q4 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialCardTravelRounded.displayName = 'AmauiIconMaterialCardTravelRounded';

export default IconMaterialCardTravelRounded;
