import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMmsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100Filled'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 13.1h8.3L13.7 9.7l-2.5 3.1-1.6-1.85ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialMmsW100Filled.displayName = 'AmauiIconMaterialMmsW100Filled';

export default IconMaterialMmsW100Filled;
