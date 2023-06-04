import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyLiraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLiraW100Filled'

      short_name='CurrencyLira'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19.7v-5.025l-3 1.875v-.85l3-1.875V9.95l-3 1.875V11l3-1.9V4.3h.7v4.375l4-2.5V7l-4 2.525V13.4l4-2.5v.825l-4 2.525V19H11q2.075 0 3.713-1.363Q16.35 16.275 16.6 14h.725q-.225 2.45-2.025 4.075Q13.5 19.7 11 19.7Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLiraW100Filled.displayName = 'AmauiIconMaterialCurrencyLiraW100Filled';

export default IconMaterialCurrencyLiraW100Filled;
