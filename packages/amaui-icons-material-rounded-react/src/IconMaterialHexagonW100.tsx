import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHexagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100'

      short_name='Hexagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.575 20.35q-.2 0-.35-.087-.15-.088-.25-.263L2.55 12.35q-.05-.075-.075-.162Q2.45 12.1 2.45 12t.025-.188q.025-.087.075-.162L6.975 4q.1-.175.25-.263.15-.087.35-.087h8.85q.2 0 .35.087.15.088.25.263l4.425 7.65q.05.075.075.162.025.088.025.188t-.025.188q-.025.087-.075.162L17.025 20q-.1.175-.25.263-.15.087-.35.087Zm0-.7h8.85l4.4-7.65-4.4-7.65h-8.85L3.15 12Zm4.4-7.65Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100.displayName = 'AmauiIconMaterialHexagonW100';

export default IconMaterialHexagonW100;
