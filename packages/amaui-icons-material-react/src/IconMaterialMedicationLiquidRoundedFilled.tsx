import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidRoundedFilled'
      short_name='MedicationLiquid'

      {...props}
    >
      <path d="M4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4Q15 4.425 14.713 4.712Q14.425 5 14 5ZM9 17.5Q9.625 17.5 10.062 17.062Q10.5 16.625 10.5 16V15H11.5Q12.125 15 12.562 14.562Q13 14.125 13 13.5Q13 12.875 12.562 12.438Q12.125 12 11.5 12H10.5V11Q10.5 10.375 10.062 9.938Q9.625 9.5 9 9.5Q8.375 9.5 7.938 9.938Q7.5 10.375 7.5 11V12H6.5Q5.875 12 5.438 12.438Q5 12.875 5 13.5Q5 14.125 5.438 14.562Q5.875 15 6.5 15H7.5V16Q7.5 16.625 7.938 17.062Q8.375 17.5 9 17.5ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H14Q14.825 6 15.413 6.588Q16 7.175 16 8V19Q16 19.825 15.413 20.413Q14.825 21 14 21ZM20 21Q19.575 21 19.288 20.712Q19 20.425 19 20V13.75Q18.125 13.325 17.562 12.337Q17 11.35 17 10Q17 8.3 17.863 7.15Q18.725 6 20 6Q21.275 6 22.138 7.15Q23 8.3 23 10Q23 11.35 22.438 12.337Q21.875 13.325 21 13.75V20Q21 20.425 20.712 20.712Q20.425 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidRoundedFilled.displayName = 'AmauiIconMaterialMedicationLiquidRoundedFilled';

export default IconMaterialMedicationLiquidRoundedFilled;
