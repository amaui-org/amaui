import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensity'

      short_name='HighDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 935v-80h80v80h-80Zm160 1v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-159v-80h80v80h-80ZM120 776V216h560v560H120Zm80-80h400V296H200v400Zm0 0V296v400Z"/>
    </Icon>
  );
});

IconMaterialHighDensity.displayName = 'AmauiIconMaterialHighDensity';

export default IconMaterialHighDensity;
