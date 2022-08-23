import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextSharpW100Filled'
      short_name='SkipNext'

      {...props}
    >
      <path d="M16.2 16.2V7.8H16.9V16.2ZM7.1 16.2V7.8L13.4 12Z"/>
    </Icon>
  );
});

IconMaterialSkipNextSharpW100Filled.displayName = 'AmauiIconMaterialSkipNextSharpW100Filled';

export default IconMaterialSkipNextSharpW100Filled;
