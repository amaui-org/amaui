import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHexagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100Filled'

      short_name='Hexagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.175 20.35 2.35 12l4.825-8.35h9.65L21.65 12l-4.825 8.35Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100Filled.displayName = 'AmauiIconMaterialHexagonW100Filled';

export default IconMaterialHexagonW100Filled;
