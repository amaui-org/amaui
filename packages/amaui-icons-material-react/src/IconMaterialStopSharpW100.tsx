import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharpW100'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM7.3 16.7V7.3H16.7V16.7ZM8 16H16V8H8Z"/>
    </Icon>
  );
});

IconMaterialStopSharpW100.displayName = 'AmauiIconMaterialStopSharpW100';

export default IconMaterialStopSharpW100;
