import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayOutlinedFilled'
      short_name='Airplay'

      {...props}
    >
      <path d="M12 15 18 21H6ZM4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H19L12 12L5 19Z"/>
    </Icon>
  )
});

export default IconMaterialAirplayOutlinedFilled;
