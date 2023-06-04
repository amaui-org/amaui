import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableViewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewW100Filled'

      short_name='TableView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7V8.3h11.4v11.4Zm.7-7.85h10V9H9Zm3.55 3.6h2.9v-2.9h-2.9Zm0 3.55h2.9v-2.85h-2.9ZM9 15.45h2.85v-2.9H9Zm7.15 0H19v-2.9h-2.85ZM9 19h2.85v-2.85H9Zm7.15 0H19v-2.85h-2.85ZM4.3 15.7V4.3h11.4v3H15V5H5v10h2.3v.7Z"/>
    </Icon>
  );
});

IconMaterialTableViewW100Filled.displayName = 'AmauiIconMaterialTableViewW100Filled';

export default IconMaterialTableViewW100Filled;
