import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100Filled'

      short_name='Shop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 15.425q0 .45.388.662.387.213.762-.037l3.025-1.925q.35-.225.35-.625t-.35-.625L11.3 10.95q-.375-.25-.762-.038-.388.213-.388.663ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425ZM10 7.3h4V6.1q0-.35-.225-.575Q13.55 5.3 13.2 5.3h-2.4q-.35 0-.575.225Q10 5.75 10 6.1Z"/>
    </Icon>
  );
});

IconMaterialShopW100Filled.displayName = 'AmauiIconMaterialShopW100Filled';

export default IconMaterialShopW100Filled;
