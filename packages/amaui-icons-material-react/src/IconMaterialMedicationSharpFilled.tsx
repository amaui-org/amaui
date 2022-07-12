import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationSharpFilled'
      short_name='Medication'

      {...props}
    >
      <path d="M10.5 17.5H13.5V15H16V12H13.5V9.5H10.5V12H8V15H10.5ZM5 21V6H19V21ZM6 5V3H18V5Z"/>
    </Icon>
  )
});

export default IconMaterialMedicationSharpFilled;
