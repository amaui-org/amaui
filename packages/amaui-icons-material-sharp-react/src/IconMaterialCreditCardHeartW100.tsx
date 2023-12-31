import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-304 21-197 480Zm537 68L585-284q-11-11-15-22.5t-4-23.5q0-26 18-46t47-20q23 0 36 10.5t30 27.5q17-17 30-27.5t36-10.5q30 0 47.5 20t17.5 46q0 12-4.5 24T809-284L697-172ZM160-598h640v-122H160v122Zm287 386H132v-536h696v239q-29-17-62-26t-69-9q-28 0-54.5 5.5T592-522H160v282h281q2 8 3 14.5t3 13.5Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100.displayName = 'AmauiIconMaterialCreditCardHeartW100';

export default IconMaterialCreditCardHeartW100;
