import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlourescentSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlourescentSharpW100Filled'
      short_name='Flourescent'

      {...props}
    >
      <path d="M6.3 13.8V10.2H17.7V13.8ZM11.65 4.8V2.6H12.35V4.8ZM18.2 7.35 17.7 6.85 19.1 5.45 19.6 5.95ZM11.65 21.3V19.1H12.35V21.3ZM19.1 18.55 17.7 17.15 18.2 16.65 19.6 18.05ZM5.8 7.35 4.4 5.95 4.9 5.45 6.3 6.85ZM4.9 18.55 4.4 18.05 5.8 16.65 6.3 17.15Z"/>
    </Icon>
  );
});

IconMaterialFlourescentSharpW100Filled.displayName = 'AmauiIconMaterialFlourescentSharpW100Filled';

export default IconMaterialFlourescentSharpW100Filled;
