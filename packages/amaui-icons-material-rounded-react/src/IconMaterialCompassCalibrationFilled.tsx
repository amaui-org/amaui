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
      <path d="M12 22q-2.075 0-3.537-1.462Q7 19.075 7 17q0-2.075 1.463-3.538Q9.925 12 12 12t3.538 1.462Q17 14.925 17 17q0 2.075-1.462 3.538Q14.075 22 12 22ZM6.275 11.425l-3.55-3.55q-.3-.3-.287-.713.012-.412.312-.687Q4.675 4.8 7.05 3.9 9.425 3 12 3t4.95.9q2.375.9 4.3 2.575.3.275.312.687.013.413-.287.713l-3.55 3.55q-.275.275-.7.3-.425.025-.775-.25-.925-.725-2-1.1Q13.175 10 12 10t-2.25.375q-1.075.375-2 1.1-.35.275-.775.25-.425-.025-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationFilled.displayName = 'AmauiIconMaterialCompassCalibrationFilled';

export default IconMaterialCompassCalibrationFilled;
