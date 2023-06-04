import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Window'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm9-11V4H4v7Zm0 2H4v7h7Zm2 0v7h7v-7Zm0-2h7V4h-7Z"/>
    </Icon>
  );
});

IconMaterialWindow.displayName = 'AmauiIconMaterialWindow';

export default IconMaterialWindow;
