import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsW100Filled'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7v-4.575h15.4V19.7Zm0-5.275v-4.85h15.4v4.85Zm0-5.55V4.3h15.4v4.575Z"/>
    </Icon>
  );
});

IconMaterialTableRowsW100Filled.displayName = 'AmauiIconMaterialTableRowsW100Filled';

export default IconMaterialTableRowsW100Filled;
