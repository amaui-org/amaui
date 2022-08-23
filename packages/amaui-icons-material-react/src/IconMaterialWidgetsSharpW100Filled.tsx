import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsSharpW100Filled'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.2 11.65 12.4 7.85 16.2 4.05 20 7.85ZM5.1 10.5V5.1H10.5V10.5ZM13.5 18.9V13.5H18.9V18.9ZM5.1 18.9V13.5H10.5V18.9Z"/>
    </Icon>
  );
});

IconMaterialWidgetsSharpW100Filled.displayName = 'AmauiIconMaterialWidgetsSharpW100Filled';

export default IconMaterialWidgetsSharpW100Filled;
