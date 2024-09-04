import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardClockW100'

      short_name='CreditCardClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m773-191 20-20-76-76v-109h-28v121l84 84Zm-70 74q-69 0-117-47.5T538-281q0-69 48-117t117-48q69 0 116.5 48T867-281q0 69-47.5 116.5T703-117ZM160-240v-304 21-197 480Zm0-358h640v-122H160v122Zm287 386H132v-536h696v239q-29-17-62-26t-69-9q-28 0-54.5 5.5T592-522H160v282h281q2 8 3 14.5t3 13.5Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClockW100.displayName = 'AmauiIconMaterialCreditCardClockW100';

export default IconMaterialCreditCardClockW100;
