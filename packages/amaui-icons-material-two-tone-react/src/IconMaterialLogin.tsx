import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Login'

      short_name='Login'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g>
    </Icon>
  );
});

IconMaterialLogin.displayName = 'AmauiIconMaterialLogin';

export default IconMaterialLogin;
