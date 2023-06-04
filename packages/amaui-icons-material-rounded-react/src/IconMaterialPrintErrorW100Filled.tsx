import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorW100Filled'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760.035 884Q749 884 741.5 876.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm-.07-172Q754 712 750 707.975T746 698V578q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM322 884q-12.75 0-21.375-8.625T292 854V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q17 0 31.5 7.5T785 476h-79q-24.75 0-42.375 17.625T646 536v132H320v188h326v28H322Zm-30-464v-60.177Q292 335 309.625 317.5T352 300h256q24.75 0 42.375 17.625T668 360v60H292Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorW100Filled.displayName = 'AmauiIconMaterialPrintErrorW100Filled';

export default IconMaterialPrintErrorW100Filled;
