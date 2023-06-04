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
      <path d="M7.175 20.35 2.35 12l4.825-8.35h9.65L21.65 12l-4.825 8.35Zm.4-.7h8.85l4.4-7.65-4.4-7.65h-8.85L3.15 12ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100.displayName = 'AmauiIconMaterialHexagonW100';

export default IconMaterialHexagonW100;
