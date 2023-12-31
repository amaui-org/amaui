import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomSheetsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomSheetsW100'

      short_name='BottomSheets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-276h560v-312H200v312Zm0 28v220h560v-220H200Zm0 0v220-220Z"/>
    </Icon>
  );
});

IconMaterialBottomSheetsW100.displayName = 'AmauiIconMaterialBottomSheetsW100';

export default IconMaterialBottomSheetsW100;
