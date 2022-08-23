import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinchZoomOutRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutRoundedFilled'
      short_name='PinchZoomOut'

      {...props}
    >
      <path d="M1 14V9H2.5V11.45L5.475 8.475L6.525 9.525L3.55 12.5H6V14ZM7.525 8.525 6.475 7.475 9.45 4.5H7V3H12V8H10.5V5.55ZM14.55 22Q14.125 22 13.75 21.837Q13.375 21.675 13.1 21.4L7.95 16.25L9.35 14.8Q9.7 14.45 10.138 14.262Q10.575 14.075 11.05 14.2L13 14.65V6.5Q13 5.45 13.725 4.725Q14.45 4 15.5 4Q16.55 4 17.275 4.725Q18 5.45 18 6.5V10.8H18.65Q18.775 10.8 18.875 10.85Q18.975 10.9 19.1 10.95L22.8 12.75Q23.4 13.025 23.688 13.637Q23.975 14.25 23.85 14.9L22.95 20.35Q22.825 21.075 22.25 21.538Q21.675 22 20.95 22ZM14.55 20H20.95L21.9 14.55Q21.9 14.55 21.9 14.55Q21.9 14.55 21.9 14.55L17.75 12.5H16V6.5Q16 6.275 15.863 6.137Q15.725 6 15.5 6Q15.275 6 15.137 6.137Q15 6.275 15 6.5V17.1L10.75 16.2Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutRoundedFilled.displayName = 'AmauiIconMaterialPinchZoomOutRoundedFilled';

export default IconMaterialPinchZoomOutRoundedFilled;
