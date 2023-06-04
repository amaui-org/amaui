import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRubleW100Filled'

      short_name='CurrencyRuble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 19.7v-2.75h-2v-.7h2V13.3h-2v-.7h2V4.3h6.2q2.025 0 3.263 1.237Q18.35 6.775 18.35 8.8t-1.237 3.262Q15.875 13.3 13.85 13.3h-5.5v2.95h4v.7h-4v2.75Zm.7-7.1h5.5q1.725 0 2.763-1.038Q17.65 10.525 17.65 8.8t-1.037-2.763Q15.575 5 13.85 5h-5.5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleW100Filled.displayName = 'AmauiIconMaterialCurrencyRubleW100Filled';

export default IconMaterialCurrencyRubleW100Filled;
