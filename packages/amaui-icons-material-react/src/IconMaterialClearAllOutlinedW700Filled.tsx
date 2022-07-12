import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllOutlinedW700Filled'
      short_name='ClearAll'

      {...props}
    >
      <path d="M4.425 13.575V10.425H19.575V13.575ZM2.05 18.725V15.575H17.2V18.725ZM6.8 8.425V5.275H21.95V8.425Z"/>
    </Icon>
  )
});

export default IconMaterialClearAllOutlinedW700Filled;
