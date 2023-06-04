import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRupeeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeW100'

      short_name='CurrencyRupee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 19.7q-.075 0-.137-.025-.063-.025-.113-.075l-5.525-5.75q-.1-.1-.162-.275-.063-.175-.063-.325 0-.325.213-.538.212-.212.537-.212h2.1q1.575 0 2.9-.988 1.325-.987 1.3-2.912H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T7 7.9h7.65q-.275-1.275-1.425-2.088Q12.075 5 10.5 5H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T7 4.3h10q.15 0 .25.1t.1.25q0 .15-.1.25T17 5h-3.8q.825.425 1.425 1.213.6.787.725 1.687H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.6q.05 2.125-1.45 3.362-1.5 1.238-3.45 1.238H8.25l5.65 5.9q.175.175.088.387-.088.213-.338.213Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeW100.displayName = 'AmauiIconMaterialCurrencyRupeeW100';

export default IconMaterialCurrencyRupeeW100;
