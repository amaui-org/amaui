import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeSharpW700Filled'
      short_name='PriceChange'

      {...props}
    >
      <path d="M8 17H10V16H12V11H8V10H12V8H10V7H8V8H6V13H10V14H6V16H8ZM16 16.25 18 14.25H14ZM14 10H18L16 8ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPriceChangeSharpW700Filled;
