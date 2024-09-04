import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockOffW100'

      short_name='ShiftLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-198.04q0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10ZM289.49-452Q271-452 262-468.5t2-31.5l83-113 21 21-79 112h111v140h160v-60l28 28v30.37q0 12.59-8.62 21.11Q570.75-312 558-312H402q-12.75 0-21.37-8.63Q372-329.25 372-342v-110h-82.51ZM504-764l192 264q11 15 2 31.5T671-452h-45.53q-3.47 0-6.09-1.06-2.63-1.07-4.73-3.2Q608-463 612-471.5t13-8.5h46L480-749l-56 78q-4 5-10.56 6-6.56 1-11.44-4-4-4-4-9t3-10l55.17-76.41Q465-777 479.82-777q14.82 0 24.18 13ZM842-78 100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM503-568Zm-49 102Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffW100.displayName = 'AmauiIconMaterialShiftLockOffW100';

export default IconMaterialShiftLockOffW100;
