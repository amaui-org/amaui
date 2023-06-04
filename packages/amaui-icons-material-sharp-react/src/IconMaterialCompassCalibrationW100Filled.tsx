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
      <path d="M12 19.9q-1.55 0-2.625-1.075T8.3 16.2q0-1.55 1.075-2.625T12 12.5q1.55 0 2.625 1.075T15.7 16.2q0 1.55-1.075 2.625T12 19.9Zm-4.95-8.7L3.9 8q1.725-1.4 3.8-2.15Q9.775 5.1 12 5.1q2.225 0 4.3.75 2.075.75 3.8 2.15l-3.15 3.2q-1.05-.825-2.325-1.262Q13.35 9.5 12 9.5t-2.625.438Q8.1 10.375 7.05 11.2Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100Filled.displayName = 'AmauiIconMaterialCompassCalibrationW100Filled';

export default IconMaterialCompassCalibrationW100Filled;
