import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenSharpW100Filled'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6H17V5.3H20.7V9ZM3.3 9V5.3H7V6H4V9ZM17 18.7V18H20V15H20.7V18.7ZM3.3 18.7V15H4V18H7V18.7ZM7.1 14.9V9.1H16.9V14.9Z"/>
    </Icon>
  );
});

export default IconMaterialFitScreenSharpW100Filled;
