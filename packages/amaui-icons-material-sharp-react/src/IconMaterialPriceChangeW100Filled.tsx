import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceChangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeW100Filled'

      short_name='PriceChange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 16.35h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM16 15.9l1.4-1.4h-2.8Zm-1.4-6.15h2.8L16 8.35ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeW100Filled.displayName = 'AmauiIconMaterialPriceChangeW100Filled';

export default IconMaterialPriceChangeW100Filled;
