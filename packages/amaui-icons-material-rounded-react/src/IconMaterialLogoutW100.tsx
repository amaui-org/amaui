import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutW100'

      short_name='Logout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.1 15.5q-.125-.125-.125-.25T16.1 15l2-2H9.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.45l-2.025-2.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.35 2.35q-.1.1-.225.1t-.25-.125ZM6.05 21q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q5.4 4.3 6.05 4.3h5.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.9q-.3 0-.55.25-.25.25-.25.55v13.7q0 .3.25.55.25.25.55.25h5.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLogoutW100.displayName = 'AmauiIconMaterialLogoutW100';

export default IconMaterialLogoutW100;
