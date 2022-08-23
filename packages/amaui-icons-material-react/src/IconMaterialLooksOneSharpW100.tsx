import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneSharpW100'
      short_name='LooksOne'

      {...props}
    >
      <path d="M12.65 16.35H13.35V7.65H10.65V8.35H12.65ZM19.7 19.7H4.3V4.3H19.7ZM5 19H19V5H5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialLooksOneSharpW100.displayName = 'AmauiIconMaterialLooksOneSharpW100';

export default IconMaterialLooksOneSharpW100;
