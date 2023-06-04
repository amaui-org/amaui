import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageW100Filled'

      short_name='ResetImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 10V5.6H5v3.2q.925-2 2.788-3.25Q9.65 4.3 12 4.3q2.675 0 4.725 1.612 2.05 1.613 2.7 4.088H18.7q-.65-2.2-2.475-3.6Q14.4 5 12 5 9.8 5 8.075 6.2 6.35 7.4 5.55 9.3H8.7v.7Zm3.65 7.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM4.3 20.7v-7.9H5V20h14v-7.2h.7v7.9Z"/>
    </Icon>
  );
});

IconMaterialResetImageW100Filled.displayName = 'AmauiIconMaterialResetImageW100Filled';

export default IconMaterialResetImageW100Filled;
