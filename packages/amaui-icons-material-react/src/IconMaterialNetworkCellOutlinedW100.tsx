import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellOutlinedW100'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M4.225 20.7 19.775 5.15V20.7ZM16.075 20H19.075V6.85L16.075 9.85Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkCellOutlinedW100;
