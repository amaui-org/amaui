import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomSheetsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomSheetsW100Filled'

      short_name='BottomSheets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-276h560v-312H200v312Z"/>
    </Icon>
  );
});

IconMaterialBottomSheetsW100Filled.displayName = 'AmauiIconMaterialBottomSheetsW100Filled';

export default IconMaterialBottomSheetsW100Filled;
