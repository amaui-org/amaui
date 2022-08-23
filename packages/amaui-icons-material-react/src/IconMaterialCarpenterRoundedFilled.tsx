import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterRoundedFilled'
      short_name='Carpenter'

      {...props}
    >
      <path d="M14.075 21.875Q13.7 21.875 13.325 21.738Q12.95 21.6 12.65 21.3L11.25 19.9Q10.975 19.625 10.838 19.288Q10.7 18.95 10.675 18.6Q10.65 18.25 10.762 17.9Q10.875 17.55 11.1 17.25L11.25 17.05L3.1 5.4L7 1.5L19.725 14.225Q20.025 14.525 20.163 14.887Q20.3 15.25 20.3 15.625Q20.3 16 20.163 16.375Q20.025 16.75 19.725 17.05L15.475 21.3Q15.175 21.6 14.812 21.738Q14.45 21.875 14.075 21.875ZM14.075 19.875Q14.075 19.875 14.075 19.875Q14.075 19.875 14.075 19.875L18.3 15.65Q18.3 15.65 18.3 15.65Q18.3 15.65 18.3 15.65L16.9 14.225L12.65 18.475Q12.65 18.475 12.65 18.475Q12.65 18.475 12.65 18.475Z"/>
    </Icon>
  );
});

IconMaterialCarpenterRoundedFilled.displayName = 'AmauiIconMaterialCarpenterRoundedFilled';

export default IconMaterialCarpenterRoundedFilled;
