import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataTableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableW100Filled'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-592h616v-168H172v168Zm0 196h616v-168H172v168Zm0 196h616v-168H172v168Zm80-446v-60h60v60h-60Zm0 196v-60h60v60h-60Zm0 196v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100Filled.displayName = 'AmauiIconMaterialDataTableW100Filled';

export default IconMaterialDataTableW100Filled;
