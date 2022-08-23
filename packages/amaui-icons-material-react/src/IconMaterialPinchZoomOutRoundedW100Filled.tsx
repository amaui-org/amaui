import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinchZoomOutRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutRoundedW100Filled'
      short_name='PinchZoomOut'

      {...props}
    >
      <path d="M1.4 13.6V9.4H2.1V12.425L5.475 9.05L5.95 9.525L2.575 12.9H5.6V13.6ZM7.525 7.95 7.05 7.475 10.425 4.1H7.4V3.4H11.6V7.6H10.9V4.575ZM14.55 20.7Q14.4 20.7 14.262 20.637Q14.125 20.575 14 20.45L9.75 16.25L10.3 15.7Q10.4 15.6 10.512 15.562Q10.625 15.525 10.75 15.55L14.3 16.25V6.5Q14.3 6 14.65 5.65Q15 5.3 15.5 5.3Q16 5.3 16.35 5.65Q16.7 6 16.7 6.5V11.8H17.75Q17.85 11.8 17.938 11.825Q18.025 11.85 18.1 11.9L21.15 13.4Q21.875 13.75 22.188 14.537Q22.5 15.325 22.35 16.15L21.65 20.15Q21.6 20.4 21.413 20.55Q21.225 20.7 20.95 20.7ZM14.55 20H20.95L21.65 16Q21.75 15.475 21.587 14.9Q21.425 14.325 20.85 14.05L17.75 12.5H16V6.5Q16 6.275 15.863 6.137Q15.725 6 15.5 6Q15.275 6 15.137 6.137Q15 6.275 15 6.5V17.1L10.75 16.25Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutRoundedW100Filled.displayName = 'AmauiIconMaterialPinchZoomOutRoundedW100Filled';

export default IconMaterialPinchZoomOutRoundedW100Filled;
