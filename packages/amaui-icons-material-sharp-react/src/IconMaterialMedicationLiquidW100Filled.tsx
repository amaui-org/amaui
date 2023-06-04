import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidW100Filled'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 5.3v-.7h9.4v.7ZM8 17h2v-2.5h2.5v-2H10V10H8v2.5H5.5v2H8Zm-4.7 2.7V7.3h11.4v12.4Zm15.4 0v-5.725q-.875-.425-1.438-1.3-.562-.875-.562-2.025 0-1.425.687-2.388.688-.962 1.663-.962.975 0 1.663.962.687.963.687 2.388 0 1.15-.562 2.025-.563.875-1.438 1.3V19.7Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidW100Filled.displayName = 'AmauiIconMaterialMedicationLiquidW100Filled';

export default IconMaterialMedicationLiquidW100Filled;
