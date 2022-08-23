import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestRoundedW100'
      short_name='SouthWest'

      {...props}
    >
      <path d="M6.4 18.35Q6.075 18.35 5.863 18.138Q5.65 17.925 5.65 17.6V10Q5.65 9.85 5.75 9.75Q5.85 9.65 6 9.65Q6.15 9.65 6.25 9.75Q6.35 9.85 6.35 10V17.15L18.35 5.15Q18.475 5.025 18.6 5.025Q18.725 5.025 18.85 5.15Q18.975 5.275 18.975 5.4Q18.975 5.525 18.85 5.65L6.85 17.65H14Q14.15 17.65 14.25 17.75Q14.35 17.85 14.35 18Q14.35 18.15 14.25 18.25Q14.15 18.35 14 18.35Z"/>
    </Icon>
  );
});

IconMaterialSouthWestRoundedW100.displayName = 'AmauiIconMaterialSouthWestRoundedW100';

export default IconMaterialSouthWestRoundedW100;
