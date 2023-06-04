import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrow'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 696h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h560v-80H200v80Zm-80 560V216h720v720H120Zm80-80h560v-80H200v80Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrow.displayName = 'AmauiIconMaterialTableRowsNarrow';

export default IconMaterialTableRowsNarrow;
