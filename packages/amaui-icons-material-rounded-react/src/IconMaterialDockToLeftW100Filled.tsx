import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftW100Filled'

      short_name='DockToLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm380-28V296H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftW100Filled.displayName = 'AmauiIconMaterialDockToLeftW100Filled';

export default IconMaterialDockToLeftW100Filled;
