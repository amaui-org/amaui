import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyFrancW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancW100Filled'

      short_name='CurrencyFranc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 19.7v-3h-2V16h2V4.3h9.2V5H8.6v6.4h7.5v.7H8.6V16h3.75v.7H8.6v3Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancW100Filled.displayName = 'AmauiIconMaterialCurrencyFrancW100Filled';

export default IconMaterialCurrencyFrancW100Filled;
