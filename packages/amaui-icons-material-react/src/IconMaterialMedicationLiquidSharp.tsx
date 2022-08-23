import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidSharp'
      short_name='MedicationLiquid'

      {...props}
    >
      <path d="M3 5V3H15V5ZM7.5 17.5H10.5V15H13V12H10.5V9.5H7.5V12H5V15H7.5ZM2 21V6H16V21ZM4 19H14V8H4ZM19 21V13.75Q18.125 13.325 17.562 12.337Q17 11.35 17 10Q17 8.3 17.863 7.15Q18.725 6 20 6Q21.275 6 22.138 7.15Q23 8.3 23 10Q23 11.35 22.438 12.337Q21.875 13.325 21 13.75V21ZM20 12Q20.3 12 20.65 11.462Q21 10.925 21 10Q21 9.075 20.65 8.537Q20.3 8 20 8Q19.7 8 19.35 8.537Q19 9.075 19 10Q19 10.925 19.35 11.462Q19.7 12 20 12ZM20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10Q20 10 20 10ZM9 13.5Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidSharp.displayName = 'AmauiIconMaterialMedicationLiquidSharp';

export default IconMaterialMedicationLiquidSharp;
