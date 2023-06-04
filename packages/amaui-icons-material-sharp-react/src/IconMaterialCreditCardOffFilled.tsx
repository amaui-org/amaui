import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffFilled'

      short_name='CreditCardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 19.15 14.85 12H20V8h-9.15l-4-4H22ZM4 12h5.15l-4-4H4Zm16.45 11.3-3.3-3.3H2V4h2l2 2H3.15L.65 3.5l1.425-1.425 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffFilled.displayName = 'AmauiIconMaterialCreditCardOffFilled';

export default IconMaterialCreditCardOffFilled;
