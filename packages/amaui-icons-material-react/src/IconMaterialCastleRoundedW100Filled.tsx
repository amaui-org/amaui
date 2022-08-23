import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleRoundedW100Filled'
      short_name='Castle'

      {...props}
    >
      <path d="M2.35 20.35Q2.075 20.35 1.863 20.138Q1.65 19.925 1.65 19.65V10Q1.65 9.85 1.75 9.75Q1.85 9.65 2 9.65Q2.15 9.65 2.25 9.75Q2.35 9.85 2.35 10V11.65H5.65V4Q5.65 3.85 5.75 3.75Q5.85 3.65 6 3.65Q6.15 3.65 6.25 3.75Q6.35 3.85 6.35 4V5.65H9.65V4Q9.65 3.85 9.75 3.75Q9.85 3.65 10 3.65Q10.15 3.65 10.25 3.75Q10.35 3.85 10.35 4V5.65H13.65V4Q13.65 3.85 13.75 3.75Q13.85 3.65 14 3.65Q14.15 3.65 14.25 3.75Q14.35 3.85 14.35 4V5.65H17.65V4Q17.65 3.85 17.75 3.75Q17.85 3.65 18 3.65Q18.15 3.65 18.25 3.75Q18.35 3.85 18.35 4V11.65H21.65V10Q21.65 9.85 21.75 9.75Q21.85 9.65 22 9.65Q22.15 9.65 22.25 9.75Q22.35 9.85 22.35 10V19.65Q22.35 19.925 22.138 20.138Q21.925 20.35 21.65 20.35H14.65V18Q14.65 16.9 13.875 16.125Q13.1 15.35 12 15.35Q10.9 15.35 10.125 16.125Q9.35 16.9 9.35 18V20.35ZM9.65 11.35H10.35V9.4H9.65ZM13.65 11.35H14.35V9.4H13.65Z"/>
    </Icon>
  );
});

IconMaterialCastleRoundedW100Filled.displayName = 'AmauiIconMaterialCastleRoundedW100Filled';

export default IconMaterialCastleRoundedW100Filled;
