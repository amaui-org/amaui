import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergyProgramSavingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramSavingW100Filled'

      short_name='EnergyProgramSaving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 16.35q-.575 0-1.275-.213-.7-.212-1.225-.662l-.75.775q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l.775-.75q-.425-.425-.65-1.175-.225-.75-.225-1.325 0-1.65 1.15-2.75t2.7-1.1h3.85v3.85q0 1.575-1.137 2.713-1.138 1.137-2.713 1.137Zm0-.7q1.3 0 2.225-.925t.925-2.225V9.35H11.5q-1.275 0-2.212.9-.938.9-.938 2.25 0 .475.187 1.062.188.588.463.938l2.75-2.75q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25L9.5 15q.4.325.95.488.55.162 1.05.162Zm.5 5.5L9.125 18.9l-3.6-.425-.425-3.6L2.85 12 5.1 9.125l.425-3.6 3.6-.425L12 2.85l2.875 2.25 3.6.425.425 3.6L21.15 12l-2.25 2.875-.425 3.6-3.6.425Zm0-.9 2.575-2 3.275-.425.4-3.25 2-2.575-2-2.575-.425-3.25-3.25-.425-2.575-2-2.575 2-3.275.425-.4 3.25-2 2.575 2 2.575.425 3.275 3.25.4Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramSavingW100Filled.displayName = 'AmauiIconMaterialEnergyProgramSavingW100Filled';

export default IconMaterialEnergyProgramSavingW100Filled;
