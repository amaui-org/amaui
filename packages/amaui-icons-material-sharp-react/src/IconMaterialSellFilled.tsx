import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSellFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellFilled'

      short_name='Sell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.825 22.825 2 12V2h10l10.8 10.85ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8Z"/>
    </Icon>
  );
});

IconMaterialSellFilled.displayName = 'AmauiIconMaterialSellFilled';

export default IconMaterialSellFilled;
