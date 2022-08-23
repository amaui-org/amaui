import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelRoundedFilled'
      short_name='CardTravel'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H7V4Q7 3.175 7.588 2.587Q8.175 2 9 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 17H20V14H4ZM9 6H15V4Q15 4 15 4Q15 4 15 4H9Q9 4 9 4Q9 4 9 4Z"/>
    </Icon>
  );
});

IconMaterialCardTravelRoundedFilled.displayName = 'AmauiIconMaterialCardTravelRoundedFilled';

export default IconMaterialCardTravelRoundedFilled;
