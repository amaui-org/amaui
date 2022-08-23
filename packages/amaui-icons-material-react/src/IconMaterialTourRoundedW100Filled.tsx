import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourRoundedW100Filled'
      short_name='Tour'

      {...props}
    >
      <path d="M5.65 21.35V2.975Q5.65 2.825 5.75 2.737Q5.85 2.65 6 2.65Q6.15 2.65 6.25 2.75Q6.35 2.85 6.35 3V4.65H18.95Q19.35 4.65 19.562 4.975Q19.775 5.3 19.625 5.675L18.3 9L19.625 12.325Q19.775 12.7 19.562 13.025Q19.35 13.35 18.95 13.35H6.35V21.35ZM12.5 10.35Q13.075 10.35 13.463 9.962Q13.85 9.575 13.85 9Q13.85 8.425 13.463 8.037Q13.075 7.65 12.5 7.65Q11.925 7.65 11.538 8.037Q11.15 8.425 11.15 9Q11.15 9.575 11.538 9.962Q11.925 10.35 12.5 10.35Z"/>
    </Icon>
  );
});

IconMaterialTourRoundedW100Filled.displayName = 'AmauiIconMaterialTourRoundedW100Filled';

export default IconMaterialTourRoundedW100Filled;
