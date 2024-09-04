import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockOffW100Filled'

      short_name='ShiftLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-198.04q0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10ZM289.49-452Q271-452 262-468.5t2-31.5l83-113 241 241v30.37q0 12.59-8.62 21.11Q570.75-312 558-312H402q-12.75 0-21.37-8.63Q372-329.25 372-342v-110h-82.51ZM504-764l192 264q11 15 2 31.5T671-452h-27q-12.44 0-23.72-5T601-470L411-660q-8-8-9-19.1-1-11.11 6.11-19.71L456-764q9.36-13 24.18-13T504-764ZM842-78 100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffW100Filled.displayName = 'AmauiIconMaterialShiftLockOffW100Filled';

export default IconMaterialShiftLockOffW100Filled;
