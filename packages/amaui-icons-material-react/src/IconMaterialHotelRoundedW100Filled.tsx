import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelRoundedW100Filled'
      short_name='Hotel'

      {...props}
    >
      <path d="M2.65 18.7Q2.5 18.7 2.4 18.6Q2.3 18.5 2.3 18.35V6.65Q2.3 6.5 2.4 6.4Q2.5 6.3 2.65 6.3Q2.8 6.3 2.9 6.4Q3 6.5 3 6.65V15H11.65V9Q11.65 8.725 11.863 8.512Q12.075 8.3 12.35 8.3H19Q20.125 8.3 20.913 9.087Q21.7 9.875 21.7 11V18.35Q21.7 18.5 21.6 18.6Q21.5 18.7 21.35 18.7Q21.2 18.7 21.1 18.6Q21 18.5 21 18.35V15.7H3V18.35Q3 18.5 2.9 18.6Q2.8 18.7 2.65 18.7ZM7 12.85Q6.225 12.85 5.688 12.312Q5.15 11.775 5.15 11Q5.15 10.225 5.688 9.688Q6.225 9.15 7 9.15Q7.775 9.15 8.312 9.688Q8.85 10.225 8.85 11Q8.85 11.775 8.312 12.312Q7.775 12.85 7 12.85Z"/>
    </Icon>
  );
});

IconMaterialHotelRoundedW100Filled.displayName = 'AmauiIconMaterialHotelRoundedW100Filled';

export default IconMaterialHotelRoundedW100Filled;
