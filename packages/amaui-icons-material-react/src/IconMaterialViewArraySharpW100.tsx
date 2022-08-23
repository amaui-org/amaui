import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArraySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArraySharpW100'
      short_name='ViewArray'

      {...props}
    >
      <path d="M9 7V17ZM18 17.7V6.3H19.7V17.7ZM8.3 17.7V6.3H15.7V17.7ZM4.3 17.7V6.3H6V17.7ZM9 17H15V7H9Z"/>
    </Icon>
  );
});

IconMaterialViewArraySharpW100.displayName = 'AmauiIconMaterialViewArraySharpW100';

export default IconMaterialViewArraySharpW100;
