import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockMediaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockMediaFilled'

      short_name='StockMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-520h520v520H80Zm240-150-48-66-72 96h280l-92-120-68 90ZM680-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-207h160v80h-80v240q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialStockMediaFilled.displayName = 'AmauiIconMaterialStockMediaFilled';

export default IconMaterialStockMediaFilled;
