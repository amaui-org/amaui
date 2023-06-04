import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYuanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuanW100'

      short_name='CurrencyYuan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.7v-6.35h-5v-.7h4.825l-5.3-8.35h.85L12 12.175 16.975 4.3h.85l-5.3 8.35h4.825v.7h-5v6.35Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuanW100.displayName = 'AmauiIconMaterialCurrencyYuanW100';

export default IconMaterialCurrencyYuanW100;
