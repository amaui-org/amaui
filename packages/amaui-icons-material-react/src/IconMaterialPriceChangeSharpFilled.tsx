import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeSharpFilled'
      short_name='PriceChange'

      {...props}
    >
      <path d="M8 17H10V16H12V11H8V10H12V8H10V7H8V8H6V13H10V14H6V16H8ZM16 16.25 18 14.25H14ZM14 10H18L16 8ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialPriceChangeSharpFilled;
