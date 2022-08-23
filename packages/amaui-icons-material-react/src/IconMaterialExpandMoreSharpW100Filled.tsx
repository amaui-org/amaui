import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandMoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreSharpW100Filled'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 14.5 6.9 9.4 7.4 8.9 12 13.5 16.6 8.9 17.1 9.4Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreSharpW100Filled.displayName = 'AmauiIconMaterialExpandMoreSharpW100Filled';

export default IconMaterialExpandMoreSharpW100Filled;
