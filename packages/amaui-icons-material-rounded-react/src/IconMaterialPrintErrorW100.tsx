import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorW100'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M292 854V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q17 0 31.5 7.5T785 476H230q-17 0-28.5 11.5T190 516v180h102v-26q0-12.75 8.625-21.375T322 640h324v28H320v188h326v28H322q-12.75 0-21.375-8.625T292 854Zm0-406v-88q0-24.75 17.625-42.375T352 300h256q24.75 0 42.375 17.625T668 360v88h-28v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28Zm468.035 436Q749 884 741.5 876.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM746 698V578q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025T750 707.975q-4-4.025-4-9.975ZM190 476h595-595Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorW100.displayName = 'AmauiIconMaterialPrintErrorW100';

export default IconMaterialPrintErrorW100;
