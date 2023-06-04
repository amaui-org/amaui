import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.7V6.3h15.4v11.4ZM5 17h4.2V7H5Zm4.9 0h4.2V7H9.9Zm4.9 0H19V7h-4.2Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100.displayName = 'AmauiIconMaterialViewColumnW100';

export default IconMaterialViewColumnW100;
