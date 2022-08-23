import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeRoundedW100Filled'
      short_name='CallMade'

      {...props}
    >
      <path d="M5.15 18.85Q5.025 18.725 5.025 18.6Q5.025 18.475 5.15 18.35L17.15 6.35H10Q9.85 6.35 9.75 6.25Q9.65 6.15 9.65 6Q9.65 5.85 9.75 5.75Q9.85 5.65 10 5.65H17.6Q17.925 5.65 18.138 5.862Q18.35 6.075 18.35 6.4V14Q18.35 14.15 18.25 14.25Q18.15 14.35 18 14.35Q17.85 14.35 17.75 14.25Q17.65 14.15 17.65 14V6.85L5.625 18.875Q5.525 18.975 5.4 18.975Q5.275 18.975 5.15 18.85Z"/>
    </Icon>
  );
});

IconMaterialCallMadeRoundedW100Filled.displayName = 'AmauiIconMaterialCallMadeRoundedW100Filled';

export default IconMaterialCallMadeRoundedW100Filled;
