import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceEnvironmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceEnvironmentFilled'

      short_name='SourceEnvironment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSourceEnvironmentFilled.displayName = 'AmauiIconMaterialSourceEnvironmentFilled';

export default IconMaterialSourceEnvironmentFilled;
