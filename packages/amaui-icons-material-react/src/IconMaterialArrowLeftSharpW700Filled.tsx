import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftSharpW700Filled'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M14.575 18.375 8.2 12 14.575 5.625Z"/>
    </Icon>
  )
});

export default IconMaterialArrowLeftSharpW700Filled;
