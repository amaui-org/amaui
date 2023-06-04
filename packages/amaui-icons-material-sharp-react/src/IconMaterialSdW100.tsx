import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdW100'

      short_name='Sd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14.6H11v-2.95H7.5V10.1h2.8v.5h.7V9.4H6.8v2.95h3.5v1.55H7.5v-.5h-.7Zm6.2 0h3.1q.45 0 .775-.325t.325-.775v-3q0-.45-.325-.775T16.1 9.4H13Zm.7-.7v-3.8h2.4q.15 0 .275.125.125.125.125.275v3q0 .15-.125.275-.125.125-.275.125ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSdW100.displayName = 'AmauiIconMaterialSdW100';

export default IconMaterialSdW100;
