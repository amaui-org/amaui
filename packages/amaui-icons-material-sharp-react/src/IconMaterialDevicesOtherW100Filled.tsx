import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOtherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOtherW100Filled'

      short_name='DevicesOther'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 18.7H3.3V5.3H20V6H4v12h3.4Zm3 0v-1.35q-.525-.35-.763-.838Q9.4 16.025 9.4 15.5t.237-1.012q.238-.488.763-.838V12.3h2.4v1.35q.525.35.762.838.238.487.238 1.012t-.238 1.012q-.237.488-.762.838v1.35Zm1.2-1.7q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.25 14 11.6 14q-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075Q10.95 17 11.6 17Zm4.2 1.7V9.8h4.9v8.9Zm.7-.7H20v-7.5h-3.5Z"/>
    </Icon>
  );
});

IconMaterialDevicesOtherW100Filled.displayName = 'AmauiIconMaterialDevicesOtherW100Filled';

export default IconMaterialDevicesOtherW100Filled;
