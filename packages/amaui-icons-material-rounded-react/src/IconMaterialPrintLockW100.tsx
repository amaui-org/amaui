import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockW100'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M659-171q-12.75 0-21.375-8.625T629-201v-105q0-13 10.5-21t24.5-8v-40q0-26.812 19.133-45.906 19.133-19.094 46-19.094t45.367 19.094Q793-401.812 793-375v40q14 0 24.5 8t10.5 21v105q0 12.75-8.625 21.375T798-171H659Zm33-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40ZM190-580h580-580Zm102 378v-130H192q-12.75 0-21.375-8.625T162-362v-178q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540v33l-14-2q-7-1-14-1v-30q0-17-11.5-28.5T730-580H230q-17 0-28.5 11.5T190-540v180h102v-26q0-12.75 8.625-21.375T322-416h256q-5 7-9.5 13.5T560-388H320v188h223q2 8 5.5 14.5T555-172H322q-12.75 0-21.375-8.625T292-202Zm0-406v-88q0-24.75 17.625-42.375T352-756h256q24.75 0 42.375 17.625T668-696v88h-28v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintLockW100.displayName = 'AmauiIconMaterialPrintLockW100';

export default IconMaterialPrintLockW100;
