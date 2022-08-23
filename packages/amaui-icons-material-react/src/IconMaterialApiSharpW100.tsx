import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApiSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiSharpW100'
      short_name='Api'

      {...props}
    >
      <path d="M12 14 10 12 12 10 14 12ZM9.875 8.575 8.425 7.125 12 3.55 15.575 7.125 14.125 8.575 12 6.45ZM7.125 15.575 3.55 12 7.125 8.425 8.575 9.875 6.45 12 8.575 14.125ZM16.875 15.575 15.425 14.125 17.55 12 15.425 9.875 16.875 8.425 20.45 12ZM12 20.45 8.425 16.875 9.875 15.425 12 17.55 14.125 15.425 15.575 16.875Z"/>
    </Icon>
  );
});

IconMaterialApiSharpW100.displayName = 'AmauiIconMaterialApiSharpW100';

export default IconMaterialApiSharpW100;
