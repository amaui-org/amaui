import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightW100Filled'

      short_name='DockToRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-25 0-42.5-17.5T172 824V328q0-25 17.5-42.5T232 268h496q25 0 42.5 17.5T788 328v496q0 25-17.5 42.5T728 884H232Zm116-28h380q12 0 22-10t10-22V328q0-12-10-22t-22-10H348v560Z"/>
    </Icon>
  );
});

IconMaterialDockToRightW100Filled.displayName = 'AmauiIconMaterialDockToRightW100Filled';

export default IconMaterialDockToRightW100Filled;
