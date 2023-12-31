import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsKrxOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxOffFilled'

      short_name='SensorsKrxOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-257q-32-48-50-104.5T80-480q0-63 18-119t50-104l67 44q-26 38-40.5 83.5T160-480q0 50 14.5 95t40.5 83l-67 45Zm549-122L379-697q23-11 48.5-17t52.5-6q100 0 170 70t70 170q0 27-6 52.5T697-379Zm117 117-58-58q21-35 32.5-75t11.5-85q0-50-14.5-95.5T745-659l66-44q32 48 50.5 104T880-480q0 60-17.5 115T814-262ZM791-56 584-264q-23 11-49.5 17.5T480-240q-100 0-170-70t-70-170q0-28 6.5-54.5T264-584L56-792l56-56 736 736-57 56Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxOffFilled.displayName = 'AmauiIconMaterialSensorsKrxOffFilled';

export default IconMaterialSensorsKrxOffFilled;
