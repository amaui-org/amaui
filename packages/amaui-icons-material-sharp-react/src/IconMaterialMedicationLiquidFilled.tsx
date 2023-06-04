import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidFilled'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h12v2Zm4.5 12.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5ZM2 21V6h14v15Zm17 0v-7.25q-.875-.425-1.438-1.413Q17 11.35 17 10q0-1.7.863-2.85Q18.725 6 20 6t2.138 1.15Q23 8.3 23 10q0 1.35-.562 2.337-.563.988-1.438 1.413V21Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidFilled.displayName = 'AmauiIconMaterialMedicationLiquidFilled';

export default IconMaterialMedicationLiquidFilled;
