import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableW100'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-420h560v-168H200v168Zm0 196h560v-168H200v168Zm0 196h560v-168H200v168Zm80-446v-60h60v60h-60Zm0 196v-60h60v60h-60Zm0 196v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100.displayName = 'AmauiIconMaterialDataTableW100';

export default IconMaterialDataTableW100;
