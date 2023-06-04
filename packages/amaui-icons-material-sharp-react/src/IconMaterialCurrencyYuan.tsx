import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYuan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuan'

      short_name='CurrencyYuan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21v-7H6v-2h4.725L5 3h2.375L12 10.3 16.625 3H19l-5.725 9H18v2h-5v7Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuan.displayName = 'AmauiIconMaterialCurrencyYuan';

export default IconMaterialCurrencyYuan;
