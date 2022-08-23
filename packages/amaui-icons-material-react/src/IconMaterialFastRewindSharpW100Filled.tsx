import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindSharpW100Filled'
      short_name='FastRewind'

      {...props}
    >
      <path d="M19.425 16.2 13.125 12 19.425 7.8ZM10.875 16.2 4.575 12 10.875 7.8Z"/>
    </Icon>
  );
});

IconMaterialFastRewindSharpW100Filled.displayName = 'AmauiIconMaterialFastRewindSharpW100Filled';

export default IconMaterialFastRewindSharpW100Filled;
