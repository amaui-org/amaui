import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFirstPageSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageSharpW700Filled'
      short_name='FirstPage'

      {...props}
    >
      <path d="M17 18.8 10.2 12 17 5.2 19.2 7.4 14.6 12 19.2 16.6ZM5.425 18.8V5.2H8.575V18.8Z"/>
    </Icon>
  )
});

export default IconMaterialFirstPageSharpW700Filled;
