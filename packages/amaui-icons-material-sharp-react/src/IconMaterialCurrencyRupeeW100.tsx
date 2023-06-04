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
      <path d="m13.5 19.7-5.85-6.1v-1.1h2.85q1.575 0 2.9-.988 1.325-.987 1.3-2.912H6.65v-.7h8q-.275-1.275-1.425-2.088Q12.075 5 10.5 5H6.65v-.7h10.7V5H13.2q.825.425 1.425 1.213.6.787.725 1.687h2v.7H15.4q.05 2.125-1.45 3.362-1.5 1.238-3.45 1.238H8.25l6.225 6.5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeW100.displayName = 'AmauiIconMaterialCurrencyRupeeW100';

export default IconMaterialCurrencyRupeeW100;
