import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRubleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRubleFilled'

      short_name='CurrencyRuble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-3H5v-2h2v-2H5v-2h2V3h6.5q2.3 0 3.9 1.6T19 8.5q0 2.3-1.6 3.9T13.5 14H9v2h4v2H9v3Zm2-9h4.5q1.45 0 2.475-1.025Q17 9.95 17 8.5q0-1.45-1.025-2.475Q14.95 5 13.5 5H9Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleFilled.displayName = 'AmauiIconMaterialCurrencyRubleFilled';

export default IconMaterialCurrencyRubleFilled;
