import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRubleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRubleW100'

      short_name='CurrencyRuble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19.7q-.15 0-.25-.1t-.1-.25v-2.4H6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V13.3H6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V5.05q0-.325.213-.538.212-.212.537-.212h5.45q2.025 0 3.263 1.237Q18.35 6.775 18.35 8.8t-1.237 3.262Q15.875 13.3 13.85 13.3h-5.5v2.95H12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.35v2.4q0 .15-.1.25t-.25.1Zm.35-7.1h5.5q1.725 0 2.763-1.038Q17.65 10.525 17.65 8.8t-1.037-2.763Q15.575 5 13.85 5h-5.5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleW100.displayName = 'AmauiIconMaterialCurrencyRubleW100';

export default IconMaterialCurrencyRubleW100;
