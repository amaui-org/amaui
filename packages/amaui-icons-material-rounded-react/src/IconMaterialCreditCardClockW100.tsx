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
      <path d="M703-117q-69 0-117-47.5T538-281q0-69 48-117t117-48q69 0 116.5 48T867-281q0 69-47.5 116.5T703-117ZM160-240v-304 21-197 480Zm0-358h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm32 386q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v140q0 14-11 20.5t-24 1.5q-22-9-46-13.5t-50-4.5q-28 0-54.5 5.5T592-522H160v250q0 12 10 22t22 10h241q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm525-75v-95q0-6-4-10t-10-4q-6 0-10 4t-4 10v95q0 6 2 11t7 10l65 65q4 4 9.5 4.5T783-201q5-5 5-10t-5-10l-66-66Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClockW100.displayName = 'AmauiIconMaterialCreditCardClockW100';

export default IconMaterialCreditCardClockW100;
