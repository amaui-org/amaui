import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartFilled'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-157q-8 0-15-2.5t-13-8.5L576-280q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-337q0 15-6 30t-18 27L744-168q-6 6-13 8.5t-15 2.5Zm-556-3q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-18-13-38-23t-42-17v-93H160v160h360q-39 38-61.5 89.5T436-280q0 32 7 62.5t20 57.5H160Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartFilled.displayName = 'AmauiIconMaterialCreditCardHeartFilled';

export default IconMaterialCreditCardHeartFilled;
