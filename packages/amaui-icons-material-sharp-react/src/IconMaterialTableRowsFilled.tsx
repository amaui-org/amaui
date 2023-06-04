import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsFilled'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-4.65h18V21Zm0-6.65V9.625h18v4.725Zm0-6.725V3h18v4.625Z"/>
    </Icon>
  );
});

IconMaterialTableRowsFilled.displayName = 'AmauiIconMaterialTableRowsFilled';

export default IconMaterialTableRowsFilled;
