import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotFilled'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-480h720v480H120Zm0-520v-80h240v-80h240v80h240v80H120Z"/>
    </Icon>
  );
});

IconMaterialStockpotFilled.displayName = 'AmauiIconMaterialStockpotFilled';

export default IconMaterialStockpotFilled;
