import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardFilled'

      short_name='CreditCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-8h16V8H4Z"/>
    </Icon>
  );
});

IconMaterialCreditCardFilled.displayName = 'AmauiIconMaterialCreditCardFilled';

export default IconMaterialCreditCardFilled;
