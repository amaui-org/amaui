import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCasesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesSharpW100Filled'
      short_name='Cases'

      {...props}
    >
      <path d="M2.3 19.65V9.55H3V18.95H18.05V19.65ZM5 16.95V6.55H10.4V3.6H16.3V6.55H21.7V16.95ZM11.1 6.55H15.6V4.3H11.1Z"/>
    </Icon>
  );
});

IconMaterialCasesSharpW100Filled.displayName = 'AmauiIconMaterialCasesSharpW100Filled';

export default IconMaterialCasesSharpW100Filled;
