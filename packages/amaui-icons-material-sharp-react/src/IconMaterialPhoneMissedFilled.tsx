import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneMissedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedFilled'

      short_name='PhoneMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 21 .4 17.475q2.35-2.75 5.35-4.112Q8.75 12 12 12t6.238 1.363q2.987 1.362 5.362 4.112L19.975 21 16 18v-3.35q-.95-.3-1.95-.475T12 14q-1.05 0-2.05.175-1 .175-1.95.475V18ZM12 11.4 7.05 6.45v2.6h-2v-6h6v2h-2.6l3.525 3.525 5.65-5.65L19.05 4.35Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedFilled.displayName = 'AmauiIconMaterialPhoneMissedFilled';

export default IconMaterialPhoneMissedFilled;
