import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableW100Filled'

      short_name='Table'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 9.2h14V5H5Zm4.9 4.9h4.2V9.9H9.9Zm0 4.9h4.2v-4.2H9.9ZM5 14.1h4.2V9.9H5Zm9.8 0H19V9.9h-4.2ZM5 19h4.2v-4.2H5Zm9.8 0H19v-4.2h-4.2Z"/>
    </Icon>
  );
});

IconMaterialTableW100Filled.displayName = 'AmauiIconMaterialTableW100Filled';

export default IconMaterialTableW100Filled;
