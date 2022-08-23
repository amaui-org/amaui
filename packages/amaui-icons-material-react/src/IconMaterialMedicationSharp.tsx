import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationSharp'
      short_name='Medication'

      {...props}
    >
      <path d="M10.5 17.5H13.5V15H16V12H13.5V9.5H10.5V12H8V15H10.5ZM5 21V6H19V21ZM7 19H17V8H7ZM6 5V3H18V5ZM7 19V8V19Z"/>
    </Icon>
  );
});

IconMaterialMedicationSharp.displayName = 'AmauiIconMaterialMedicationSharp';

export default IconMaterialMedicationSharp;
