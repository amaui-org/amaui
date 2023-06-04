import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidW100'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 5.3v-.7h9.4v.7ZM8 17h2v-2.5h2.5v-2H10V10H8v2.5H5.5v2H8Zm-4.7 2.7V7.3h11.4v12.4ZM4 19h10V8H4Zm14.7.7v-5.725q-.875-.425-1.438-1.3-.562-.875-.562-2.025 0-1.425.687-2.388.688-.962 1.663-.962.975 0 1.663.962.687.963.687 2.388 0 1.15-.562 2.025-.563.875-1.438 1.3V19.7Zm.35-6.4q.5 0 1.075-.713.575-.712.575-1.937t-.575-1.938Q19.55 8 19.05 8t-1.075.712q-.575.713-.575 1.938t.575 1.937q.575.713 1.075.713Zm0-2.65ZM9 13.5Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidW100.displayName = 'AmauiIconMaterialMedicationLiquidW100';

export default IconMaterialMedicationLiquidW100;
