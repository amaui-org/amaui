import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationW100Filled'

      short_name='Medication'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.2h.7v-2.5h2.5V13h-2.5v-2.5h-.7V13h-2.5v.7h2.5ZM6.3 19.55V7.15h11.4v12.4Zm.3-14.4v-.7h10.8v.7Z"/>
    </Icon>
  );
});

IconMaterialMedicationW100Filled.displayName = 'AmauiIconMaterialMedicationW100Filled';

export default IconMaterialMedicationW100Filled;
