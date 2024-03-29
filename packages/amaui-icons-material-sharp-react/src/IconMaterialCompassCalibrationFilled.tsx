import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationFilled'

      short_name='CompassCalibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.537-1.462Q7 19.075 7 17q0-2.075 1.463-3.538Q9.925 12 12 12t3.538 1.462Q17 14.925 17 17q0 2.075-1.462 3.538Q14.075 22 12 22Zm-5-9.85-5-5q2-2 4.588-3.075Q9.175 3 12 3q2.825 0 5.413 1.075Q20 5.15 22 7.15l-5 5q-1.025-1.025-2.3-1.588Q13.425 10 12 10q-1.425 0-2.7.562-1.275.563-2.3 1.588Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationFilled.displayName = 'AmauiIconMaterialCompassCalibrationFilled';

export default IconMaterialCompassCalibrationFilled;
