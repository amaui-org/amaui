import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M190 476h580-580Zm102 378V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q28.9 0 48.45 19.55Q798 487.1 798 516v33l-14-2q-7-1-14-1v-30q0-17-11.5-28.5T730 476H230q-17 0-28.5 11.5T190 516v180h102v-26q0-12.75 8.625-21.375T322 640h256q-5 7-9.5 13.5T560 668H320v188h223q2 8 5.5 14.5T555 884H322q-12.75 0-21.375-8.625T292 854Zm426-27 132-132q3.75-4 9.375-4t9.625 4q5 4 4.5 10t-4.5 10L739 845q-9 9-21 9t-21-9l-46-45q-5-4.091-5-9.545 0-5.455 5-10.672Q656 775 661 775t10 5l47 47ZM292 448v-88q0-24.75 17.625-42.375T352 300h256q24.75 0 42.375 17.625T668 360v88h-28v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100.displayName = 'AmauiIconMaterialPrintConnectW100';

export default IconMaterialPrintConnectW100;
