import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharpW100Filled'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 16.525 15.7 11.775 15.2 11.275 10.95 15.525 8.8 13.375 8.3 13.875ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialTaskSharpW100Filled.displayName = 'AmauiIconMaterialTaskSharpW100Filled';

export default IconMaterialTaskSharpW100Filled;
