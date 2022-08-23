import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayRoundedW100Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M10.35 19.7Q9.85 19.7 9.663 19.237Q9.475 18.775 9.825 18.425L11.475 16.775Q11.6 16.65 11.725 16.6Q11.85 16.55 12 16.55Q12.15 16.55 12.275 16.6Q12.4 16.65 12.525 16.775L14.175 18.425Q14.525 18.775 14.338 19.237Q14.15 19.7 13.65 19.7ZM4.8 17.7Q4.175 17.7 3.737 17.262Q3.3 16.825 3.3 16.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V16.2Q20.7 16.825 20.263 17.262Q19.825 17.7 19.2 17.7H16.7L13.05 14.05Q12.825 13.825 12.55 13.725Q12.275 13.625 12 13.625Q11.725 13.625 11.45 13.725Q11.175 13.825 10.95 14.05L7.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialAirplayRoundedW100Filled.displayName = 'AmauiIconMaterialAirplayRoundedW100Filled';

export default IconMaterialAirplayRoundedW100Filled;
