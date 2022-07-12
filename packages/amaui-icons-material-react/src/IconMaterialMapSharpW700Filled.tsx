import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharpW700Filled'
      short_name='Map'

      {...props}
    >
      <path d="M15 21.875 9 19.775 2.15 22.5V4.425L9 2.125L15 4.225L21.85 1.5V19.575ZM14 18.2V7.2L10 5.8V16.8Z"/>
    </Icon>
  )
});

export default IconMaterialMapSharpW700Filled;
