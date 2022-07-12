import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenSharpW700Filled'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M3.425 21.575V2.425h17.15v19.15Zm4.15-11.15h2.85v-1h3.15v1h2.85v-3.85h-8.85Zm-1 8h10.85V5.575H6.575Z"/>
    </Icon>
  )
});

export default IconMaterialWindowOpenSharpW700Filled;
