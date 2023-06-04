import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYenFilled'

      short_name='CurrencyYen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21v-4H6v-2h5v-2H6v-2h4.075L5 3h2.375L12 10.3 16.625 3H19l-5.075 8H18v2h-5v2h5v2h-5v4Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYenFilled.displayName = 'AmauiIconMaterialCurrencyYenFilled';

export default IconMaterialCurrencyYenFilled;
