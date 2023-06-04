import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExitToApp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToApp'

      short_name='ExitToApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.5 17-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45 10.5 7l5 5ZM3 21v-6h2v4h14V5H5v4H3V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialExitToApp.displayName = 'AmauiIconMaterialExitToApp';

export default IconMaterialExitToApp;
