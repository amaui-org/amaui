import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYuanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuanW100Filled'

      short_name='CurrencyYuan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-.15 0-.25-.1t-.1-.25v-6H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.475l-4.95-7.8q-.125-.2-.012-.375.112-.175.312-.175.1 0 .175.05.075.05.125.125l4.875 7.7 4.875-7.7q.05-.075.125-.125t.175-.05q.2 0 .313.175.112.175-.013.375l-4.95 7.8H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.65v6q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuanW100Filled.displayName = 'AmauiIconMaterialCurrencyYuanW100Filled';

export default IconMaterialCurrencyYuanW100Filled;
