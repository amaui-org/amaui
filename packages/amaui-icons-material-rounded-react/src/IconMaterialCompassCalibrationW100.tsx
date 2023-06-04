import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationW100'

      short_name='CompassCalibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.9q-1.55 0-2.625-1.075T8.3 16.2q0-1.55 1.075-2.625T12 12.5q1.55 0 2.625 1.075T15.7 16.2q0 1.55-1.075 2.625T12 19.9Zm0-.7q1.25 0 2.125-.875T15 16.2q0-1.25-.875-2.125T12 13.2q-1.25 0-2.125.875T9 16.2q0 1.25.875 2.125T12 19.2Zm-5.425-8.5-2.2-2.2q-.2-.2-.175-.475.025-.275.25-.45 1.65-1.2 3.575-1.838Q9.95 5.1 12 5.1t3.975.637q1.925.638 3.575 1.838.225.175.25.45.025.275-.175.475l-2.2 2.2q-.2.2-.487.238-.288.037-.538-.138-.975-.65-2.088-.975Q13.2 9.5 12 9.5q-1.2 0-2.312.325-1.113.325-2.088.975-.25.175-.538.138-.287-.038-.487-.238Zm.575-.4q1.05-.75 2.288-1.125Q10.675 8.8 12 8.8q1.325 0 2.538.362 1.212.363 2.312 1.088l2.2-2.2q-1.55-1.1-3.337-1.675Q13.925 5.8 12 5.8t-3.712.575Q6.5 6.95 4.95 8.05ZM12 8.8Zm0 7.4Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100.displayName = 'AmauiIconMaterialCompassCalibrationW100';

export default IconMaterialCompassCalibrationW100;
