import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCard'

      short_name='CreditCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM4 8h16V6H4Zm0 4v6h16v-6Zm0 6V6Z"/>
    </Icon>
  );
});

IconMaterialCreditCard.displayName = 'AmauiIconMaterialCreditCard';

export default IconMaterialCreditCard;
