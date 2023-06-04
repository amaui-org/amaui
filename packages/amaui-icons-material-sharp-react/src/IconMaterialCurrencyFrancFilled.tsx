import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyFrancFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancFilled'

      short_name='CurrencyFranc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-3H5v-2h2V3h11v2H9v6h8v2H9v3h4v2H9v3Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancFilled.displayName = 'AmauiIconMaterialCurrencyFrancFilled';

export default IconMaterialCurrencyFrancFilled;
