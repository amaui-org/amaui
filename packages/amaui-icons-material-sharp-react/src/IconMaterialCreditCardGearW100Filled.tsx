import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardGearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardGearW100Filled'

      short_name='CreditCardGear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m683-142-2-28q-21-4-39.5-13.5T609-210l-26 12-16-22 22-18q-8-23-8-46t8-46l-22-18 16-22 26 12q13-17 32-26.5t40-13.5l2-28h28l2 28q21 4 40 13.5t32 26.5l26-12 16 22-22 18q8 23 8 46t-8 46l22 18-16 22-26-12q-14 17-32.5 26.5T713-170l-2 28h-28Zm14-54q37 0 62.5-25.5T785-284q0-37-25.5-62.5T697-372q-37 0-62.5 25.5T609-284q0 37 25.5 62.5T697-196Zm-565-16v-536h696v239q-7-4-13.5-7.5T800-523v-75H160v76h432q-69 30-112 94t-43 144q0 19 2.5 37t7.5 35H132Z"/>
    </Icon>
  );
});

IconMaterialCreditCardGearW100Filled.displayName = 'AmauiIconMaterialCreditCardGearW100Filled';

export default IconMaterialCreditCardGearW100Filled;
