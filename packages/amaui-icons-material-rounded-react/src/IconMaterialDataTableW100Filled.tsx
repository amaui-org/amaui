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
      <path d="M172-592h616v-123q0-18.75-13.125-31.875T743-760H217q-18.75 0-31.875 13.125T172-715v123Zm0 196h616v-168H172v168Zm45 196h526q18.75 0 31.875-13.125T788-245v-123H172v123q0 18.75 13.125 31.875T217-200Zm64.825-446Q269-646 260.5-654.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0 196Q269-450 260.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0 196Q269-254 260.5-262.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100Filled.displayName = 'AmauiIconMaterialDataTableW100Filled';

export default IconMaterialDataTableW100Filled;
