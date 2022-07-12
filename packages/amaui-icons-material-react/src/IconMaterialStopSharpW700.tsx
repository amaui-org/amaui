import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharpW700'
      short_name='Stop'

      {...props}
    >
      <path d="M8.3 8.3V15.7ZM5.15 18.85V5.15H18.85V18.85ZM8.3 15.7H15.7V8.3H8.3Z"/>
    </Icon>
  )
});

export default IconMaterialStopSharpW700;
