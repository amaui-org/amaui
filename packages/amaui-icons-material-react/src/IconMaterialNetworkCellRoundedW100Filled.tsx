import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellRoundedW100Filled'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M6.025 20.7Q5.525 20.7 5.338 20.237Q5.15 19.775 5.5 19.425L18.5 6.425Q18.85 6.075 19.312 6.262Q19.775 6.45 19.775 6.95V19.95Q19.775 20.275 19.562 20.487Q19.35 20.7 19.025 20.7ZM16.075 20H19.075V6.85L16.075 9.85Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellRoundedW100Filled.displayName = 'AmauiIconMaterialNetworkCellRoundedW100Filled';

export default IconMaterialNetworkCellRoundedW100Filled;
