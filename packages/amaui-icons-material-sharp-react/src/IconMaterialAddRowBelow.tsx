import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowBelow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelow'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-560h560v-240H200v240Zm-80 400v-720h720v720H680v-80h80v-240H200v240h80v80H120Zm360-320Zm0-80v80-80Zm0 0ZM440-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelow.displayName = 'AmauiIconMaterialAddRowBelow';

export default IconMaterialAddRowBelow;
