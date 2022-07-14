import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationSharpW100Filled'
      short_name='Medication'

      {...props}
    >
      <path d="M11.65 16.2H12.35V13.7H14.85V13H12.35V10.5H11.65V13H9.15V13.7H11.65ZM6.3 19.55V7.15H17.7V19.55ZM6.6 5.15V4.45H17.4V5.15Z"/>
    </Icon>
  );
});

export default IconMaterialMedicationSharpW100Filled;
