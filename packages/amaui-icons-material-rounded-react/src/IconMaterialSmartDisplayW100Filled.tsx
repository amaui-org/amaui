import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayW100Filled'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.3 14.55 3.025-1.925q.35-.225.35-.625t-.35-.625L11.3 9.45q-.375-.25-.762-.038-.388.213-.388.663v3.85q0 .45.388.662.387.213.762-.037ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayW100Filled.displayName = 'AmauiIconMaterialSmartDisplayW100Filled';

export default IconMaterialSmartDisplayW100Filled;
