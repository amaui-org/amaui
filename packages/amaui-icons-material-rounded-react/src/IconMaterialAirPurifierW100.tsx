import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirPurifierW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierW100'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-232v-448q0-44.55 31.725-76.275Q235.45-788 280-788h280q44.55 0 76.275 31.725Q668-724.55 668-680v40h-28v-40q0-33-23.5-56.5T560-760H280q-33 0-56.5 23.5T200-680v448q0 14 9 23t23 9h376q14 0 23-9t9-23v-48h28v48q0 24.75-17.625 42.375T608-172H232q-24.75 0-42.375-17.625T172-232Zm248-140q44.55 0 76.275-31.725Q528-435.45 528-480q0-44.55-31.725-76.275Q464.55-588 420-588q-44.55 0-76.275 31.725Q312-524.55 312-480q0 44.55 31.725 76.275Q375.45-372 420-372Zm0-28q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm387-199.965q0 5.965-4.025 9.965T793-586q-17 0-31 7.5T740-554q-11 23-31.265 35.5Q688.471-506 664-506q-6.219 0-10.61-3.5Q649-513 649-520t4.39-10.5q4.391-3.5 10.61-3.5 17.217 0 30.609-7.5Q708-549 716-566q11-23 32-35.5t45-12.5q5.95 0 9.975 4.035 4.025 4.035 4.025 10ZM807-440q0 7-4.39 10.5-4.391 3.5-10.61 3.5-17.217 0-30.609 7.5Q748-411 740-394q-11 23-31.265 35.5Q688.471-346 664-346q-6.219 0-10.61-3.5Q649-353 649-360t4.39-10.5q4.391-3.5 10.61-3.5 17.217 0 30.609-7.5Q708-389 716-406q11-21 31.265-34.5Q767.529-454 792-454q6.219 0 10.61 3.5Q807-447 807-440ZM640-200H200h440-70 70Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierW100.displayName = 'AmauiIconMaterialAirPurifierW100';

export default IconMaterialAirPurifierW100;
