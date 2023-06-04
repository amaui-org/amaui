import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomW100Filled'

      short_name='DockToBottom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm-32-176h560V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomW100Filled.displayName = 'AmauiIconMaterialDockToBottomW100Filled';

export default IconMaterialDockToBottomW100Filled;
