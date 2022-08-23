import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeSharpW100Filled'
      short_name='PriceChange'

      {...props}
    >
      <path d="M8.65 16.35H9.35V15.35H11.35V11.65H7.35V9.35H11.35V8.65H9.35V7.65H8.65V8.65H6.65V12.35H10.65V14.65H6.65V15.35H8.65ZM16 15.9 17.4 14.5H14.6ZM14.6 9.75H17.4L16 8.35ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeSharpW100Filled.displayName = 'AmauiIconMaterialPriceChangeSharpW100Filled';

export default IconMaterialPriceChangeSharpW100Filled;
