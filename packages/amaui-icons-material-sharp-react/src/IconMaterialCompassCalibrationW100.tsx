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
      <path d="M12 19.9q-1.55 0-2.625-1.075T8.3 16.2q0-1.55 1.075-2.625T12 12.5q1.55 0 2.625 1.075T15.7 16.2q0 1.55-1.075 2.625T12 19.9Zm0-.7q1.25 0 2.125-.875T15 16.2q0-1.25-.875-2.125T12 13.2q-1.25 0-2.125.875T9 16.2q0 1.25.875 2.125T12 19.2Zm-4.95-8L3.9 8q1.725-1.4 3.8-2.15Q9.775 5.1 12 5.1q2.225 0 4.3.75 2.075.75 3.8 2.15l-3.15 3.2q-1.05-.825-2.325-1.262Q13.35 9.5 12 9.5t-2.625.438Q8.1 10.375 7.05 11.2Zm.1-.9q1.05-.75 2.288-1.125Q10.675 8.8 12 8.8q1.325 0 2.538.362 1.212.363 2.312 1.088l2.2-2.2q-1.55-1.1-3.337-1.675Q13.925 5.8 12 5.8t-3.712.575Q6.5 6.95 4.95 8.05ZM12 8.8Zm0 7.4Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100.displayName = 'AmauiIconMaterialCompassCalibrationW100';

export default IconMaterialCompassCalibrationW100;
