import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIflW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IflW100'

      short_name='Ifl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M632-278q21 0 35.5-14.5T682-328q0-21-14.5-35.5T632-378q-21 0-35.5 14.5T582-328q0 21 14.5 35.5T632-278ZM480-430q21 0 35.5-14.5T530-480q0-21-14.5-35.5T480-530q-21 0-35.5 14.5T430-480q0 21 14.5 35.5T480-430ZM328-582q21 0 35.5-14.5T378-632q0-21-14.5-35.5T328-682q-21 0-35.5 14.5T278-632q0 21 14.5 35.5T328-582Zm-96 410q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialIflW100.displayName = 'AmauiIconMaterialIflW100';

export default IconMaterialIflW100;
