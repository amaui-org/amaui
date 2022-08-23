import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebSharpW100Filled'
      short_name='Web'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 13.3H15.15V9.3H4ZM4 18H15.15V14H4ZM15.85 18H20V9.3H15.85Z"/>
    </Icon>
  );
});

IconMaterialWebSharpW100Filled.displayName = 'AmauiIconMaterialWebSharpW100Filled';

export default IconMaterialWebSharpW100Filled;
