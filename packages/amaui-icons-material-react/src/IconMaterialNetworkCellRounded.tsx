import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellRounded'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M4.425 22Q3.75 22 3.487 21.387Q3.225 20.775 3.7 20.3L20.3 3.7Q20.775 3.225 21.388 3.487Q22 3.75 22 4.425V21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM17 20H20V6.825L17 9.825Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellRounded.displayName = 'AmauiIconMaterialNetworkCellRounded';

export default IconMaterialNetworkCellRounded;
