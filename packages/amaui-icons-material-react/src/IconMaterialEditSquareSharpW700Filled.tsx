import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareSharpW700Filled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M2.15 24.55V4.85H14.2l-7.6 7.6v7.65h7.65l7.6-7.575V24.55ZM8.6 18.1v-4.825L15.575 6.3l4.825 4.8-6.975 7Zm13.225-8.425L17 4.875l3.1-3.1 4.825 4.8Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareSharpW700Filled;
