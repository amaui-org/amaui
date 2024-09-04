import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAbove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAbove'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-240H200v240Zm640 80H120v-720h160v80h-80v240h560v-240h-80v-80h160v720ZM480-480Zm0 80v-80 80Zm0 0Zm-40-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddRowAbove.displayName = 'AmauiIconMaterialAddRowAbove';

export default IconMaterialAddRowAbove;
