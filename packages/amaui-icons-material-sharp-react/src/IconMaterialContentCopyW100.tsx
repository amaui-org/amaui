import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 17.5V4.1h10.4v13.4Zm.7-.7h9v-12h-9Zm-3.4 3.4V8.1h.7v11.4h8.4v.7Zm3.4-3.4v-12 12Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100.displayName = 'AmauiIconMaterialContentCopyW100';

export default IconMaterialContentCopyW100;
