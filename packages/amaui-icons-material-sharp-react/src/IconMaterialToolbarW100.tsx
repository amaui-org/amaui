import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarW100'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-468h560v-120H200v120Zm560 28H200v412h560v-412Zm-560-28v28-28Zm0 0v-120 120Zm0 28v412-412Z"/>
    </Icon>
  );
});

IconMaterialToolbarW100.displayName = 'AmauiIconMaterialToolbarW100';

export default IconMaterialToolbarW100;
