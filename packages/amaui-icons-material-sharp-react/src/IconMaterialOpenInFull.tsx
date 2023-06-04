import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFull'

      short_name='OpenInFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2Z"/>
    </Icon>
  );
});

IconMaterialOpenInFull.displayName = 'AmauiIconMaterialOpenInFull';

export default IconMaterialOpenInFull;
