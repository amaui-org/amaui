import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardClockW100Filled'

      short_name='CreditCardClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m773-191 20-20-76-76v-109h-28v121l84 84Zm-70 74q-69 0-117-47.5T538-281q0-69 48-117t117-48q69 0 116.5 48T867-281q0 69-47.5 116.5T703-117Zm-571-95v-536h696v239q-7-4-13.5-7.5T800-523v-75H160v76h432q-69 30-112 94t-43 144q0 19 2.5 37t7.5 35H132Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClockW100Filled.displayName = 'AmauiIconMaterialCreditCardClockW100Filled';

export default IconMaterialCreditCardClockW100Filled;
