import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellSharpFilled'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M2 22 22 2V22ZM17 20H20V6.825L17 9.825Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellSharpFilled.displayName = 'AmauiIconMaterialNetworkCellSharpFilled';

export default IconMaterialNetworkCellSharpFilled;
