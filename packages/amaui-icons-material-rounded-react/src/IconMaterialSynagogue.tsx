import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSynagogue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Synagogue'

      short_name='Synagogue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19V7q0-1.25.875-2.125T4 4q1.25 0 2.125.875T7 7v.3l3.7-3.175q.275-.25.612-.363.338-.112.688-.112.35 0 .688.112.337.113.612.363L17 7.3V7q0-1.25.875-2.125T20 4q1.25 0 2.125.875T23 7v12q0 .825-.587 1.413Q21.825 21 21 21h-8v-5q0-.425-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16v5ZM19 8h2V7q0-.425-.288-.713Q20.425 6 20 6t-.712.287Q19 6.575 19 7ZM3 8h2V7q0-.425-.287-.713Q4.425 6 4 6t-.712.287Q3 6.575 3 7Zm0 11h2v-9H3v9Zm4 0h2v-3q0-1.25.875-2.125T12 13q1.25 0 2.125.875T15 16v3h2V9.925v.013-.013L12 5.65 7 9.925v.013-.013Zm12 0h2v-9h-2Zm-7-7.5q-.625 0-1.062-.438Q10.5 10.625 10.5 10t.438-1.062Q11.375 8.5 12 8.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialSynagogue.displayName = 'AmauiIconMaterialSynagogue';

export default IconMaterialSynagogue;
