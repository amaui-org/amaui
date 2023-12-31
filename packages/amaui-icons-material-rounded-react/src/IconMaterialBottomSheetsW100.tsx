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
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-276h560v-280q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v280Zm0 28v188q0 12 10 22t22 10h496q12 0 22-10t10-22v-188H200Zm0 0v220-220Z"/>
    </Icon>
  );
});

IconMaterialBottomSheetsW100.displayName = 'AmauiIconMaterialBottomSheetsW100';

export default IconMaterialBottomSheetsW100;
