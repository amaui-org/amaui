import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyFrancW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancW100'

      short_name='CurrencyFranc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 19.7q-.15 0-.25-.1t-.1-.25V16.7H6.25q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H7.9V5.05q0-.325.213-.538.212-.212.537-.212h8.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.6v6.4h7.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.6V16H12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.6v2.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancW100.displayName = 'AmauiIconMaterialCurrencyFrancW100';

export default IconMaterialCurrencyFrancW100;
