import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100Filled'

      short_name='ShoppingBag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11q.15 0 .25-.1t.1-.25V8h-.7v2.65q0 .15.1.25T9 11Zm.35-4.35v.65h5.3v-.65q0-1.125-.763-1.888Q13.125 4 12 4t-1.887.762q-.763.763-.763 1.888ZM15 11q.15 0 .25-.1t.1-.25V8h-.7v2.65q0 .15.1.25t.25.1Zm-8.2 9.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V8.8q0-.65.425-1.075Q6.15 7.3 6.8 7.3h1.85v-.65q0-1.4.975-2.375Q10.6 3.3 12 3.3t2.375.975q.975.975.975 2.375v.65h1.85q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100Filled.displayName = 'AmauiIconMaterialShoppingBagW100Filled';

export default IconMaterialShoppingBagW100Filled;
