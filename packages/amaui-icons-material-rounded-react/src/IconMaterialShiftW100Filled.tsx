import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftW100Filled'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 854V604h-82.507Q271 604 262 587.5t2-31.5l192-265q9.36-13 24.18-13T504 291l192 265q11 15 2 31.5T670.507 604H588v250q0 12.75-8.625 21.375T558 884H402q-12.75 0-21.375-8.625T372 854Z"/>
    </Icon>
  );
});

IconMaterialShiftW100Filled.displayName = 'AmauiIconMaterialShiftW100Filled';

export default IconMaterialShiftW100Filled;
