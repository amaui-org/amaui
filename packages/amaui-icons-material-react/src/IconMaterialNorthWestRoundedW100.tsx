import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestRoundedW100'
      short_name='NorthWest'

      {...props}
    >
      <path d="M18.35 18.85 6.35 6.85V14Q6.35 14.15 6.25 14.25Q6.15 14.35 6 14.35Q5.85 14.35 5.75 14.25Q5.65 14.15 5.65 14V6.4Q5.65 6.075 5.863 5.862Q6.075 5.65 6.4 5.65H14Q14.15 5.65 14.25 5.75Q14.35 5.85 14.35 6Q14.35 6.15 14.25 6.25Q14.15 6.35 14 6.35H6.85L18.85 18.35Q18.975 18.475 18.975 18.6Q18.975 18.725 18.85 18.85Q18.725 18.975 18.6 18.975Q18.475 18.975 18.35 18.85Z"/>
    </Icon>
  );
});

IconMaterialNorthWestRoundedW100.displayName = 'AmauiIconMaterialNorthWestRoundedW100';

export default IconMaterialNorthWestRoundedW100;
