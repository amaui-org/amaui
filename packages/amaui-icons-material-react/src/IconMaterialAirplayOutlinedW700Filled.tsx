import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayOutlinedW700Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M12 15.85 18 21.85H6ZM3.475 19.475Q2.45 19.2 1.8 18.362Q1.15 17.525 1.15 16.425V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V16.425Q22.85 17.525 22.213 18.362Q21.575 19.2 20.55 19.475L12 10.925L3.475 19.475Z"/>
    </Icon>
  )
});

export default IconMaterialAirplayOutlinedW700Filled;
