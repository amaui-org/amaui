import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stack'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Zm80-80h400v-400H400v400Zm200-200Z"/>
    </Icon>
  );
});

IconMaterialStack.displayName = 'AmauiIconMaterialStack';

export default IconMaterialStack;
