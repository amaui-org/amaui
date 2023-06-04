import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasswordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasswordFilled'

      short_name='Password'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-2h20v2Zm1.15-6.05-1.3-.75.85-1.5H1V9.2h1.7l-.85-1.45L3.15 7 4 8.45 4.85 7l1.3.75L5.3 9.2H7v1.5H5.3l.85 1.5-1.3.75-.85-1.5Zm8 0-1.3-.75.85-1.5H9V9.2h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H15v1.5h-1.7l.85 1.5-1.3.75-.85-1.5Zm8 0-1.3-.75.85-1.5H17V9.2h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H23v1.5h-1.7l.85 1.5-1.3.75-.85-1.5Z"/>
    </Icon>
  );
});

IconMaterialPasswordFilled.displayName = 'AmauiIconMaterialPasswordFilled';

export default IconMaterialPasswordFilled;
