import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataTable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTable'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-507h560v-133H200v133Zm0 214h560v-134H200v134Zm0 213h560v-133H200v133Zm40-454v-80h80v80h-80Zm0 214v-80h80v80h-80Zm0 214v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDataTable.displayName = 'AmauiIconMaterialDataTable';

export default IconMaterialDataTable;
