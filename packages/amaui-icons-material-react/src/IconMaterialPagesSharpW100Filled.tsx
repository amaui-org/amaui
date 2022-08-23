import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesSharpW100Filled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 15.4 13.075 13.075 15.4 12 13.075 10.925 12 8.6 10.925 10.925 8.6 12 10.925 13.075ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialPagesSharpW100Filled.displayName = 'AmauiIconMaterialPagesSharpW100Filled';

export default IconMaterialPagesSharpW100Filled;
