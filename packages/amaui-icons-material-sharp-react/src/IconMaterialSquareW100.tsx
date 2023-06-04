import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareW100'

      short_name='Square'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialSquareW100.displayName = 'AmauiIconMaterialSquareW100';

export default IconMaterialSquareW100;
