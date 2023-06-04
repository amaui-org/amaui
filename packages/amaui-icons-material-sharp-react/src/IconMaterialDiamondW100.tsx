import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.975 2.775 8.9 5.4 3.65h13.2l2.625 5.25ZM8.575 8.65h6.85l-2.15-4.3h-2.55Zm3.075 9.825V9.35H4.075Zm.7 0 7.575-9.125H12.35ZM16.2 8.65h4.1l-2.15-4.3h-4.1Zm-12.5 0h4.1l2.15-4.3h-4.1Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100.displayName = 'AmauiIconMaterialDiamondW100';

export default IconMaterialDiamondW100;
