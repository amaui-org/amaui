import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergyProgramTimeUsedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramTimeUsedW100Filled'

      short_name='EnergyProgramTimeUsed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.95 17.35v-5.7h.7v5.7Zm7.4 0v-2.7h.7v2.7Zm-3.7 0v-8.7h.7v8.7ZM3.8 20.7q-.625 0-1.062-.438Q2.3 19.825 2.3 19.2V6.8q0-.625.438-1.062Q3.175 5.3 3.8 5.3h7.85V6H3.8q-.35 0-.575.225Q3 6.45 3 6.8v12.4q0 .35.225.575Q3.45 20 3.8 20h12.4q.35 0 .575-.225Q17 19.55 17 19.2v-5.85h.7v5.85q0 .625-.438 1.062-.437.438-1.062.438ZM18 11.35q-.7 0-1.475-.275-.775-.275-1.4-.775l-.775.7q-.125.125-.25.137-.125.013-.25-.112t-.125-.25q0-.125.125-.25l.775-.75Q14.15 9.05 13.9 8.35q-.25-.7-.25-1.35 0-1.875 1.3-3.113Q16.25 2.65 18 2.65h4.35V7q0 1.725-1.237 3.037Q19.875 11.35 18 11.35Zm0-.7q1.5 0 2.575-1.075Q21.65 8.5 21.65 7V3.35H18q-1.475 0-2.562 1.037Q14.35 5.425 14.35 7q0 .55.25 1.175t.525 1.075L18.3 6.075q.125-.125.25-.125t.25.125q.125.125.125.262 0 .138-.125.263l-3.15 3.15q.45.425 1.088.662.637.238 1.262.238Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramTimeUsedW100Filled.displayName = 'AmauiIconMaterialEnergyProgramTimeUsedW100Filled';

export default IconMaterialEnergyProgramTimeUsedW100Filled;
