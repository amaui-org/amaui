import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputRoundedW100Filled'
      short_name='PowerInput'

      {...props}
    >
      <path d="M3 10.35Q2.85 10.35 2.75 10.25Q2.65 10.15 2.65 10Q2.65 9.85 2.75 9.75Q2.85 9.65 3 9.65H20Q20.15 9.65 20.25 9.75Q20.35 9.85 20.35 10Q20.35 10.15 20.25 10.25Q20.15 10.35 20 10.35ZM3 14.35Q2.85 14.35 2.75 14.25Q2.65 14.15 2.65 14Q2.65 13.85 2.75 13.75Q2.85 13.65 3 13.65H6.025Q6.15 13.65 6.25 13.75Q6.35 13.85 6.35 14Q6.35 14.15 6.25 14.25Q6.15 14.35 6 14.35ZM10 14.35Q9.85 14.35 9.75 14.25Q9.65 14.15 9.65 14Q9.65 13.85 9.75 13.75Q9.85 13.65 10 13.65H13Q13.15 13.65 13.25 13.75Q13.35 13.85 13.35 14Q13.35 14.15 13.25 14.25Q13.15 14.35 13 14.35ZM16.975 14.35Q16.85 14.35 16.75 14.25Q16.65 14.15 16.65 14Q16.65 13.85 16.75 13.75Q16.85 13.65 17 13.65H20Q20.15 13.65 20.25 13.75Q20.35 13.85 20.35 14Q20.35 14.15 20.25 14.25Q20.15 14.35 20 14.35Z"/>
    </Icon>
  );
});

IconMaterialPowerInputRoundedW100Filled.displayName = 'AmauiIconMaterialPowerInputRoundedW100Filled';

export default IconMaterialPowerInputRoundedW100Filled;
