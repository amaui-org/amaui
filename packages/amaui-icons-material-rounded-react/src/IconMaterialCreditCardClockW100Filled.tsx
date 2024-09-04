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
      <path d="M717-287v-95q0-6-4-10t-10-4q-6 0-10 4t-4 10v95q0 6 2 11t7 10l65 65q4 4 9.5 4.5T783-201q5-5 5-10t-5-10l-66-66Zm-14 170q-69 0-117-47.5T538-281q0-69 48-117t117-48q69 0 116.5 48T867-281q0 69-47.5 116.5T703-117Zm-511-95q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v158q0 6-4 10t-10 4q-6 0-10-4t-4-10v-68H160v76h377q11 0 14 11t-7 17q-49 35-78 90t-29 120q0 10 .5 19.5T440-246q2 14-6 24t-21 10H192Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClockW100Filled.displayName = 'AmauiIconMaterialCreditCardClockW100Filled';

export default IconMaterialCreditCardClockW100Filled;
