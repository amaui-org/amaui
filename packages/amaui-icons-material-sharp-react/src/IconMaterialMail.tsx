import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mail'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm10-7L4 8v10h16V8Zm0-2 8-5H4ZM4 8V6v2Z"/>
    </Icon>
  );
});

IconMaterialMail.displayName = 'AmauiIconMaterialMail';

export default IconMaterialMail;
