import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayOutlinedW100Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M12 16.25 15.45 19.7H8.55ZM4.8 17.7Q4.15 17.7 3.725 17.275Q3.3 16.85 3.3 16.2V5.8Q3.3 5.15 3.725 4.725Q4.15 4.3 4.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V16.2Q20.7 16.85 20.275 17.275Q19.85 17.7 19.2 17.7H16.7L12 13L7.3 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialAirplayOutlinedW100Filled;
