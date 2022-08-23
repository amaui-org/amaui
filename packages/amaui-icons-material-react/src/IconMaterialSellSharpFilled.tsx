import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSellSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellSharpFilled'
      short_name='Sell'

      {...props}
    >
      <path d="M12.825 22.825 2 12V2H12L22.8 12.85ZM6.5 8Q7.125 8 7.562 7.562Q8 7.125 8 6.5Q8 5.875 7.562 5.438Q7.125 5 6.5 5Q5.875 5 5.438 5.438Q5 5.875 5 6.5Q5 7.125 5.438 7.562Q5.875 8 6.5 8Z"/>
    </Icon>
  );
});

IconMaterialSellSharpFilled.displayName = 'AmauiIconMaterialSellSharpFilled';

export default IconMaterialSellSharpFilled;
