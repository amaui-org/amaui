import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergyProgramTimeUsedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyProgramTimeUsedFilled'

      short_name='EnergyProgramTimeUsed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18v-7h2v7Zm8 0v-4h2v4Zm-4 0V8h2v10Zm-6 4q-.825 0-1.412-.587Q1 20.825 1 20V6q0-.825.588-1.412Q2.175 4 3 4h8v2H3v14h14v-6h2v6q0 .825-.587 1.413Q17.825 22 17 22Zm15-10q-.8 0-1.512-.225-.713-.225-1.313-.65l-.375.35q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7l.4-.4q-.375-.575-.587-1.25Q13 7.75 13 7q0-2.15 1.488-3.575Q15.975 2 18 2h5v5q0 2-1.425 3.5T18 12Zm0-2q1.25 0 2.125-.875T21 7V4h-3q-1.2 0-2.1.85Q15 5.7 15 7q0 .325.062.637.063.313.188.588l2.6-2.6q.3-.3.7-.3.4 0 .7.3.3.3.3.713 0 .412-.3.712l-2.6 2.6q.3.15.638.25.337.1.712.1Z"/>
    </Icon>
  );
});

IconMaterialEnergyProgramTimeUsedFilled.displayName = 'AmauiIconMaterialEnergyProgramTimeUsedFilled';

export default IconMaterialEnergyProgramTimeUsedFilled;
