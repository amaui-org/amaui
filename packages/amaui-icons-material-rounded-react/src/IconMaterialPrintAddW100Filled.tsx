import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddW100Filled'

      short_name='PrintAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M322 884q-12.75 0-21.375-8.625T292 854V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q28.9 0 48.45 19.55Q798 487.1 798 516v33q-7.849-1.4-16.424-2.2Q773 546 765 546q-65 0-119.5 32.5T560 668H320v188h223q2 8 5.5 14.5T555 884H322Zm-30-464v-60.177Q292 335 309.625 317.5T352 300h256q24.75 0 42.375 17.625T668 360v60H292Zm459 375H645q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V661q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T894.975 791q-4.025 4-9.975 4H779v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T755 910.975q-4-4.025-4-9.975V795Z"/>
    </Icon>
  );
});

IconMaterialPrintAddW100Filled.displayName = 'AmauiIconMaterialPrintAddW100Filled';

export default IconMaterialPrintAddW100Filled;
