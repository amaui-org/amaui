import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotW100Filled'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-429h616v429H172Zm0-489v-28h214v-59h188v59h214v28H172Z"/>
    </Icon>
  );
});

IconMaterialStockpotW100Filled.displayName = 'AmauiIconMaterialStockpotW100Filled';

export default IconMaterialStockpotW100Filled;
