import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenSharpW700'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M3.425 21.575V2.425h17.15v19.15Zm3.15-11.15h3.85v-1h3.15v1h3.85v-4.85H6.575Zm0 8h10.85-10.85Z"/>
    </Icon>
  )
});

export default IconMaterialWindowOpenSharpW700;
