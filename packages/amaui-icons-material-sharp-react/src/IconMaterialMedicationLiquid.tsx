import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquid'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h12v2Zm4.5 12.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5ZM2 21V6h14v15Zm2-2h10V8H4Zm15 2v-7.25q-.875-.425-1.438-1.413Q17 11.35 17 10q0-1.7.863-2.85Q18.725 6 20 6t2.138 1.15Q23 8.3 23 10q0 1.35-.562 2.337-.563.988-1.438 1.413V21Zm1-9q.3 0 .65-.538Q21 10.925 21 10q0-.925-.35-1.463Q20.3 8 20 8q-.3 0-.65.537Q19 9.075 19 10t.35 1.462Q19.7 12 20 12Zm0-2ZM9 13.5Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquid.displayName = 'AmauiIconMaterialMedicationLiquid';

export default IconMaterialMedicationLiquid;
