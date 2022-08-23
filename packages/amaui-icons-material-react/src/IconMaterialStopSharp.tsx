import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharp'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM6 18V6H18V18ZM8 16H16V8H8Z"/>
    </Icon>
  );
});

IconMaterialStopSharp.displayName = 'AmauiIconMaterialStopSharp';

export default IconMaterialStopSharp;
