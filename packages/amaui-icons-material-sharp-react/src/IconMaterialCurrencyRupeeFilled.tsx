import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRupeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeFilled'

      short_name='CurrencyRupee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.725 21 7 14v-2h3.5q1.325 0 2.288-.863.962-.862 1.162-2.137H6V7h7.65q-.425-.875-1.262-1.438Q11.55 5 10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.562Q12.675 14 10.5 14h-.725l6.725 7Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeFilled.displayName = 'AmauiIconMaterialCurrencyRupeeFilled';

export default IconMaterialCurrencyRupeeFilled;
