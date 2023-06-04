import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointOfSaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointOfSaleW100Filled'

      short_name='PointOfSale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 7.55V4h10.7v3.55Zm.7-.7h9.3V4.7h-9.3ZM4 18.95v-2.5h16v2.5Zm0-3.2 3.2-7.2h9.6l3.2 7.2Zm4.45-1.55h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Zm2.7 3.4h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Zm2.7 3.4h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Zm0-1.7h1.7v-.7h-1.7Z"/>
    </Icon>
  );
});

IconMaterialPointOfSaleW100Filled.displayName = 'AmauiIconMaterialPointOfSaleW100Filled';

export default IconMaterialPointOfSaleW100Filled;
