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
      <path d="M12 16.2q.15 0 .25-.1t.1-.25V13.7h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15v-2.15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25V13H9.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.15v2.15q0 .15.1.25t.25.1Zm-4.2 3.35q-.625 0-1.062-.437-.438-.438-.438-1.063v-9.4q0-.625.438-1.063.437-.437 1.062-.437h8.4q.625 0 1.062.437.438.438.438 1.063v9.4q0 .625-.438 1.063-.437.437-1.062.437Zm-.85-14.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialMedicationW100Filled.displayName = 'AmauiIconMaterialMedicationW100Filled';

export default IconMaterialMedicationW100Filled;
