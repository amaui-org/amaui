import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddW100'

      short_name='PrintAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M190 476h580-580Zm102 378V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q28.9 0 48.45 19.55Q798 487.1 798 516v33l-14-2q-7-1-14-1v-30q0-17-11.5-28.5T730 476H230q-17 0-28.5 11.5T190 516v180h102v-26q0-12.75 8.625-21.375T322 640h256q-5 7-9.5 13.5T560 668H320v188h223q2 8 5.5 14.5T555 884H322q-12.75 0-21.375-8.625T292 854Zm0-406v-88q0-24.75 17.625-42.375T352 300h256q24.75 0 42.375 17.625T668 360v88h-28v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28Zm459 347H645q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V661q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T894.975 791q-4.025 4-9.975 4H779v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T755 910.975q-4-4.025-4-9.975V795Z"/>
    </Icon>
  );
});

IconMaterialPrintAddW100.displayName = 'AmauiIconMaterialPrintAddW100';

export default IconMaterialPrintAddW100;
