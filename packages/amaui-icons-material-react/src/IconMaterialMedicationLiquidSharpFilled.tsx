import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidSharpFilled'
      short_name='MedicationLiquid'

      {...props}
    >
      <path d="M3 5V3H15V5ZM7.5 17.5H10.5V15H13V12H10.5V9.5H7.5V12H5V15H7.5ZM2 21V6H16V21ZM19 21V13.75Q18.125 13.325 17.562 12.337Q17 11.35 17 10Q17 8.3 17.863 7.15Q18.725 6 20 6Q21.275 6 22.138 7.15Q23 8.3 23 10Q23 11.35 22.438 12.337Q21.875 13.325 21 13.75V21Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidSharpFilled.displayName = 'AmauiIconMaterialMedicationLiquidSharpFilled';

export default IconMaterialMedicationLiquidSharpFilled;
