import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeW100Filled'

      short_name='Coffee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17q-2.35 0-4.025-1.663Q5.3 13.675 5.3 11.3V5q0-.3.2-.5t.5-.2h11.45q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7h-.75v2.2q0 2.375-1.675 4.037Q13.35 17 11 17ZM6 8.4h10V5H6Zm10.7 0h.75q.725 0 1.213-.488.487-.487.487-1.212t-.487-1.213Q18.175 5 17.45 5h-.75ZM5.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCoffeeW100Filled.displayName = 'AmauiIconMaterialCoffeeW100Filled';

export default IconMaterialCoffeeW100Filled;
