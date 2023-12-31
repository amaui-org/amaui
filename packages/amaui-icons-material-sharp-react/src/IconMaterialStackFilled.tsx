import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackFilled'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Z"/>
    </Icon>
  );
});

IconMaterialStackFilled.displayName = 'AmauiIconMaterialStackFilled';

export default IconMaterialStackFilled;
