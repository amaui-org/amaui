import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationW100Filled'

      short_name='CompassCalibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.9q-1.55 0-2.625-1.075T8.3 16.2q0-1.55 1.075-2.625T12 12.5q1.55 0 2.625 1.075T15.7 16.2q0 1.55-1.075 2.625T12 19.9Zm-5.425-9.2-2.2-2.2q-.2-.2-.175-.475.025-.275.25-.45 1.65-1.2 3.575-1.838Q9.95 5.1 12 5.1t3.975.637q1.925.638 3.575 1.838.225.175.25.45.025.275-.175.475l-2.2 2.2q-.2.2-.487.238-.288.037-.538-.138-.975-.65-2.088-.975Q13.2 9.5 12 9.5q-1.2 0-2.312.325-1.113.325-2.088.975-.25.175-.538.138-.287-.038-.487-.238Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100Filled.displayName = 'AmauiIconMaterialCompassCalibrationW100Filled';

export default IconMaterialCompassCalibrationW100Filled;
