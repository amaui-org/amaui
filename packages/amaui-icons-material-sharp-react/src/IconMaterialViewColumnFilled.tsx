import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnFilled'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.675 19V5H21v14ZM9.35 19V5h5.325v14Zm-6.325 0V5H8.35v14Z"/>
    </Icon>
  );
});

IconMaterialViewColumnFilled.displayName = 'AmauiIconMaterialViewColumnFilled';

export default IconMaterialViewColumnFilled;
