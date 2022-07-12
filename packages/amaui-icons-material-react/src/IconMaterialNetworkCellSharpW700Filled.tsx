import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellSharpW700Filled'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M1.225 22 22.75 0.475V22ZM16.6 18.85H19.6V8.075L16.6 11.075Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkCellSharpW700Filled;
