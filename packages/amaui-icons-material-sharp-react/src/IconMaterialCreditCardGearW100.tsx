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
      <path d="M160-240v-304 21-197 480Zm0-358h640v-122H160v122Zm287 386H132v-536h696v239q-29-17-62-26t-69-9q-28 0-54.5 5.5T592-522H160v282h281q2 8 3 14.5t3 13.5Zm236 70-2-28q-21-4-39.5-13.5T609-210l-26 12-16-22 22-18q-8-23-8-46t8-46l-22-18 16-22 26 12q13-17 32-26.5t40-13.5l2-28h28l2 28q21 4 40 13.5t32 26.5l26-12 16 22-22 18q8 23 8 46t-8 46l22 18-16 22-26-12q-14 17-32.5 26.5T713-170l-2 28h-28Zm14-54q37 0 62.5-25.5T785-284q0-37-25.5-62.5T697-372q-37 0-62.5 25.5T609-284q0 37 25.5 62.5T697-196Z"/>
    </Icon>
  );
});

IconMaterialCreditCardGearW100.displayName = 'AmauiIconMaterialCreditCardGearW100';

export default IconMaterialCreditCardGearW100;
