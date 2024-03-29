import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeIotDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDeviceFilled'

      short_name='HomeIotDevice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.025 10h1V6.5q0-.225-.137-.363Q5.75 6 5.525 6q-.225 0-.362.137-.138.138-.138.363Zm.5 10q-1.875 0-3.187-1.3-1.313-1.3-1.313-3.2 0-1.2.55-2.15t1.45-1.55V6.5q0-1.05.725-1.775Q4.475 4 5.525 4q1.05 0 1.775.725.725.725.725 1.775v5.3q.9.6 1.45 1.55.55.95.55 2.15 0 1.875-1.312 3.188Q7.4 20 5.525 20Zm8.175-5q-1.2-.825-1.95-2.125T11 10q0-2.5 1.75-4.25T17 4q2.5 0 4.25 1.75T23 10q0 1.575-.75 2.875T20.3 15Zm3.3 5q-.6 0-1.05-.45-.45-.45-.45-1.05h3q0 .6-.45 1.05Q17.6 20 17 20Zm-3-2v-2h6v2Z"/>
    </Icon>
  );
});

IconMaterialHomeIotDeviceFilled.displayName = 'AmauiIconMaterialHomeIotDeviceFilled';

export default IconMaterialHomeIotDeviceFilled;
