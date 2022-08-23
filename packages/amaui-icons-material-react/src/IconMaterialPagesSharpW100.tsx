import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesSharpW100'
      short_name='Pages'

      {...props}
    >
      <path d="M12 15.4 13.075 13.075 15.4 12 13.075 10.925 12 8.6 10.925 10.925 8.6 12 10.925 13.075ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialPagesSharpW100.displayName = 'AmauiIconMaterialPagesSharpW100';

export default IconMaterialPagesSharpW100;
