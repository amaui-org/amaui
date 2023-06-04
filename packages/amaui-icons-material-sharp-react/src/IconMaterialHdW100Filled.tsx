import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdW100Filled'

      short_name='Hd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14.6h.7v-2h2.8v2h.7V9.4h-.7v2.5H7.5V9.4h-.7Zm6.2 0h3.1q.45 0 .775-.325t.325-.775v-3q0-.45-.325-.775T16.1 9.4H13Zm.7-.7v-3.8h2.4q.15 0 .275.125.125.125.125.275v3q0 .15-.125.275-.125.125-.275.125ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialHdW100Filled.displayName = 'AmauiIconMaterialHdW100Filled';

export default IconMaterialHdW100Filled;
