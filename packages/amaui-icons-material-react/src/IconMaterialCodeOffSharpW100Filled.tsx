import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffSharpW100Filled'
      short_name='CodeOff'

      {...props}
    >
      <path d="M19.85 20.85 7.45 8.45 3.9 12 8.5 16.6 8 17.1 2.9 12 6.95 7.95 3.15 4.15 3.65 3.65 20.35 20.35ZM17.95 15.15 17.45 14.65 20.1 12 15.5 7.4 16 6.9 21.1 12Z"/>
    </Icon>
  );
});

IconMaterialCodeOffSharpW100Filled.displayName = 'AmauiIconMaterialCodeOffSharpW100Filled';

export default IconMaterialCodeOffSharpW100Filled;
