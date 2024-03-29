import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCellFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellFilled'

      short_name='NetworkCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 22q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.288.712Q21.425 22 21 22ZM17 20h3V6.825l-3 3Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellFilled.displayName = 'AmauiIconMaterialNetworkCellFilled';

export default IconMaterialNetworkCellFilled;
