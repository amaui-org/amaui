import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExitToAppW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppW100Filled'

      short_name='ExitToApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.5 15.6-.5-.5 2.75-2.75H3.8v-.7h8.95L10 8.9l.5-.5 3.6 3.6Zm-6.7 4.1v-4.35h.7V19h15V5h-15v3.65h-.7V4.3h16.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialExitToAppW100Filled.displayName = 'AmauiIconMaterialExitToAppW100Filled';

export default IconMaterialExitToAppW100Filled;
