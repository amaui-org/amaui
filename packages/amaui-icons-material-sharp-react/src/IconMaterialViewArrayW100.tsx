import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArrayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayW100'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 7v10Zm9 10.7V6.3h1.7v11.4Zm-9.7 0V6.3h7.4v11.4Zm-4 0V6.3H6v11.4ZM9 17h6V7H9Z"/>
    </Icon>
  );
});

IconMaterialViewArrayW100.displayName = 'AmauiIconMaterialViewArrayW100';

export default IconMaterialViewArrayW100;
