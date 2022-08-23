import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellSharpW100'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M4.225 20.7 19.775 5.15V20.7ZM16.075 20H19.075V6.85L16.075 9.85Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellSharpW100.displayName = 'AmauiIconMaterialNetworkCellSharpW100';

export default IconMaterialNetworkCellSharpW100;
