import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderSharpW700'
      short_name='Reorder'

      {...props}
    >
      <path d="M2.425 15.95V12.8H21.575V15.95ZM2.425 20.725V17.575H21.575V20.725ZM2.425 11.2V8.05H21.575V11.2ZM2.425 6.425V3.275H21.575V6.425Z"/>
    </Icon>
  )
});

export default IconMaterialReorderSharpW700;
