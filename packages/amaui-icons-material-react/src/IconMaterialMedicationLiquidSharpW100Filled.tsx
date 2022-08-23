import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidSharpW100Filled'
      short_name='MedicationLiquid'

      {...props}
    >
      <path d="M4.3 5.3V4.6H13.7V5.3ZM8 17H10V14.5H12.5V12.5H10V10H8V12.5H5.5V14.5H8ZM3.3 19.7V7.3H14.7V19.7ZM18.7 19.7V13.975Q17.825 13.55 17.262 12.675Q16.7 11.8 16.7 10.65Q16.7 9.225 17.387 8.262Q18.075 7.3 19.05 7.3Q20.025 7.3 20.713 8.262Q21.4 9.225 21.4 10.65Q21.4 11.8 20.838 12.675Q20.275 13.55 19.4 13.975V19.7Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidSharpW100Filled.displayName = 'AmauiIconMaterialMedicationLiquidSharpW100Filled';

export default IconMaterialMedicationLiquidSharpW100Filled;
