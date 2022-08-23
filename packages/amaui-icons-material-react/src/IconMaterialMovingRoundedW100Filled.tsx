import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingRoundedW100Filled'
      short_name='Moving'

      {...props}
    >
      <path d="M3.025 16.85Q2.9 16.725 2.9 16.6Q2.9 16.475 3.025 16.35L7.625 11.75Q8.325 11.075 9.288 11.062Q10.25 11.05 10.95 11.75L12.1 12.9Q12.6 13.4 13.275 13.387Q13.95 13.375 14.45 12.9L20.025 7.35H16.875Q16.725 7.35 16.625 7.25Q16.525 7.15 16.525 7Q16.525 6.85 16.625 6.75Q16.725 6.65 16.875 6.65H20.475Q20.8 6.65 21.013 6.862Q21.225 7.075 21.225 7.4V11Q21.225 11.15 21.125 11.25Q21.025 11.35 20.875 11.35Q20.725 11.35 20.625 11.25Q20.525 11.15 20.525 11V7.85L14.95 13.4Q14.25 14.075 13.275 14.087Q12.3 14.1 11.625 13.425L10.45 12.25Q9.95 11.75 9.288 11.762Q8.625 11.775 8.125 12.25L3.525 16.85Q3.425 16.95 3.288 16.962Q3.15 16.975 3.025 16.85Z"/>
    </Icon>
  );
});

IconMaterialMovingRoundedW100Filled.displayName = 'AmauiIconMaterialMovingRoundedW100Filled';

export default IconMaterialMovingRoundedW100Filled;
