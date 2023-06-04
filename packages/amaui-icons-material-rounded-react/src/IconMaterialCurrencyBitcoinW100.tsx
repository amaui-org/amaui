import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinW100'

      short_name='CurrencyBitcoin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 19.7q-.15 0-.25-.1t-.1-.25V17.7H7.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V7H7.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3H13V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3q1.325 0 2.163.837.837.838.837 2.188 0 .825-.325 1.45t-.825 1q1.025.275 1.587 1.062.563.788.563 1.838 0 1.35-.837 2.187-.838.838-2.188.838H13.7v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7h-2.25v1.65q0 .15-.1.25t-.25.1Zm-.65-8.05h3.925q1.025 0 1.675-.65.65-.65.65-1.675t-.65-1.675Q14.7 7 13.675 7H9.75Zm0 5.35h4.925q1.025 0 1.675-.65.65-.65.65-1.675T16.35 13q-.65-.65-1.675-.65H9.75Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinW100.displayName = 'AmauiIconMaterialCurrencyBitcoinW100';

export default IconMaterialCurrencyBitcoinW100;
