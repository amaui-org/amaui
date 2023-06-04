import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100Filled'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 17.5V4.1h10.4v13.4Zm-2.7 2.7V8.1h.7v11.4h8.4v.7Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100Filled.displayName = 'AmauiIconMaterialContentCopyW100Filled';

export default IconMaterialContentCopyW100Filled;
