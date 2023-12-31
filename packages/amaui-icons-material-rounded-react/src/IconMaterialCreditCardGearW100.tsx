import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardGearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardGearW100'

      short_name='CreditCardGear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-304 21-197 480Zm0-358h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm287 386H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v179q-29-17-62-26t-69-9q-28 0-54.5 5.5T592-522H160v250q0 12 10 22t22 10h249q2 8 3 14.5t3 13.5Zm162 2-16 7q-5 2-9.5 1t-7.5-5l-1-3q-3-5-3-9.5t5-8.5l12-10q-8-23-8-46t8-46l-12-10q-4-3-5-8t2-10l3-3q3-4 7-5t9 1l16 7q13-17 32-26.5t40-13.5l1-15q1-5 5-9t9-4h2q5 0 9 4t5 9l1 15q21 4 40 13.5t32 26.5l16-7q5-2 9.5-1t7.5 5l1 3q3 5 3 9.5t-5 8.5l-12 10q8 23 8 46t-8 46l12 10q4 3 5 8t-2 10l-3 3q-3 4-7 5t-9-1l-16-7q-14 17-32.5 26.5T713-170l-1 15q-1 5-5 9t-9 4h-2q-5 0-9-4t-5-9l-1-15q-21-4-39.5-13.5T609-210Zm88 14q37 0 62.5-25.5T785-284q0-37-25.5-62.5T697-372q-37 0-62.5 25.5T609-284q0 37 25.5 62.5T697-196Z"/>
    </Icon>
  );
});

IconMaterialCreditCardGearW100.displayName = 'AmauiIconMaterialCreditCardGearW100';

export default IconMaterialCreditCardGearW100;
