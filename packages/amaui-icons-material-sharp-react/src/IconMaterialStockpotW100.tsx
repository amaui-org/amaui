import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotW100'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-429h616v429H172Zm28-28h560v-373H200v373Zm-28-461v-28h214v-59h188v59h214v28H172Zm308 274Z"/>
    </Icon>
  );
});

IconMaterialStockpotW100.displayName = 'AmauiIconMaterialStockpotW100';

export default IconMaterialStockpotW100;
