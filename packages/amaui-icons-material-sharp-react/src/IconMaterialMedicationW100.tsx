import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationW100'

      short_name='Medication'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.2h.7v-2.5h2.5V13h-2.5v-2.5h-.7V13h-2.5v.7h2.5ZM6.3 19.55V7.15h11.4v12.4Zm.7-.7h10v-11H7Zm-.4-13.7v-.7h10.8v.7Zm.4 13.7v-11 11Z"/>
    </Icon>
  );
});

IconMaterialMedicationW100.displayName = 'AmauiIconMaterialMedicationW100';

export default IconMaterialMedicationW100;
