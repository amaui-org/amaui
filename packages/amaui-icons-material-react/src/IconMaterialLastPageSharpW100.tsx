import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLastPageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageSharpW100'
      short_name='LastPage'

      {...props}
    >
      <path d="M7 17.1 6.5 16.6 11.1 12 6.5 7.4 7 6.9 12.1 12ZM16.65 17.35V6.65H17.35V17.35Z"/>
    </Icon>
  );
});

IconMaterialLastPageSharpW100.displayName = 'AmauiIconMaterialLastPageSharpW100';

export default IconMaterialLastPageSharpW100;
