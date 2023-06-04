import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckFilled'

      short_name='PriceCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 14.975v-1H4v-2h5v-2H4v-6h2.5v-1h2v1H11v2H6v2h5v6H8.5v1Zm7.45 6-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckFilled.displayName = 'AmauiIconMaterialPriceCheckFilled';

export default IconMaterialPriceCheckFilled;
