import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100Filled'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 21.35q-.65 0-1.075-.425-.425-.425-.425-1.075V8.15q0-.65.425-1.075Q4.5 6.65 5.15 6.65h1.5v-3.5q0-.625.438-1.063.437-.437 1.062-.437h7.7q.625 0 1.063.437.437.438.437 1.063v3.5h1.5q.65 0 1.075.425.425.425.425 1.075v11.7q0 .65-.425 1.075-.425.425-1.075.425Zm2.2-14.7h9.3v-3.5q0-.35-.225-.575-.225-.225-.575-.225h-7.7q-.35 0-.575.225-.225.225-.225.575ZM12 18.475q1.875 0 3.175-1.3 1.3-1.3 1.3-3.175 0-1.875-1.3-3.175-1.3-1.3-3.175-1.3-1.875 0-3.175 1.3-1.3 1.3-1.3 3.175 0 1.875 1.3 3.175 1.3 1.3 3.175 1.3Zm.9-3.075-1.125-1.125q-.025-.025-.125-.3V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85l1.05 1.05q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100Filled.displayName = 'AmauiIconMaterialPunchClockW100Filled';

export default IconMaterialPunchClockW100Filled;
