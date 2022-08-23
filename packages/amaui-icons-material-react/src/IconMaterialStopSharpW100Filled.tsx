import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharpW100Filled'
      short_name='Stop'

      {...props}
    >
      <path d="M7.3 16.7V7.3H16.7V16.7Z"/>
    </Icon>
  );
});

IconMaterialStopSharpW100Filled.displayName = 'AmauiIconMaterialStopSharpW100Filled';

export default IconMaterialStopSharpW100Filled;
