import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardGearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardGearFilled'

      short_name='CreditCardGear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200ZM80-160v-640h800v293q-18-13-38-23t-42-17v-93H160v160h360q-39 38-61.5 89.5T436-280q0 32 7 62.5t20 57.5H80Z"/>
    </Icon>
  );
});

IconMaterialCreditCardGearFilled.displayName = 'AmauiIconMaterialCreditCardGearFilled';

export default IconMaterialCreditCardGearFilled;
