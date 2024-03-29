import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestRemoteComfortSensorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestRemoteComfortSensorFilled'

      short_name='NestRemoteComfortSensor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.65 0-2.825-1.175Q8 18.65 8 17q0-1.65 1.175-2.825Q10.35 13 12 13q1.65 0 2.825 1.175Q16 15.35 16 17q0 1.65-1.175 2.825Q13.65 21 12 21Zm0-2q.825 0 1.413-.587Q14 17.825 14 17q0-.825-.587-1.412Q12.825 15 12 15q-.825 0-1.412.588Q10 16.175 10 17t.588 1.413Q11.175 19 12 19ZM3.05 8.6 1.575 7.225q2.025-1.975 4.7-3.1Q8.95 3 12 3t5.725 1.125q2.675 1.125 4.7 3.1L20.95 8.6q-1.775-1.675-4.05-2.637Q14.625 5 12 5q-2.625 0-4.9.963-2.275.962-4.05 2.637Zm14.25 3.425q-1.05-.95-2.4-1.488Q13.55 10 12 10q-1.55 0-2.887.537-1.338.538-2.413 1.488L5.225 10.65Q6.575 9.4 8.312 8.7 10.05 8 12 8q1.95 0 3.675.7 1.725.7 3.075 1.95Z"/>
    </Icon>
  );
});

IconMaterialNestRemoteComfortSensorFilled.displayName = 'AmauiIconMaterialNestRemoteComfortSensorFilled';

export default IconMaterialNestRemoteComfortSensorFilled;
