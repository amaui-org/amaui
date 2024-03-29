import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartFilled'

      short_name='RemoveShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.7 4-4.975 9h-.9l-9-9ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm13.5 1.3L14.15 17H4.425L6.9 11.95 5.1 7.9.7 3.5l1.4-1.4 19.8 19.8ZM12.15 15l-2-2H8.6l-1 2ZM17 22q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartFilled.displayName = 'AmauiIconMaterialRemoveShoppingCartFilled';

export default IconMaterialRemoveShoppingCartFilled;
