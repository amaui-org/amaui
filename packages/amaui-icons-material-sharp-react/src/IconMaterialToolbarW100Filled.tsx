import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarW100Filled'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-640v-148h616v148H172Zm0 468v-440h616v440H172Z"/>
    </Icon>
  );
});

IconMaterialToolbarW100Filled.displayName = 'AmauiIconMaterialToolbarW100Filled';

export default IconMaterialToolbarW100Filled;
