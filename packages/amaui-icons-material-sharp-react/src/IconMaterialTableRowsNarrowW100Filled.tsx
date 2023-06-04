import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100Filled'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 723h616V590H172v133Zm0-161h616V429H172v133Zm0-161h616V268H172v133Zm616 483V268v616Zm-616 0h616V751H172v133Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100Filled.displayName = 'AmauiIconMaterialTableRowsNarrowW100Filled';

export default IconMaterialTableRowsNarrowW100Filled;
