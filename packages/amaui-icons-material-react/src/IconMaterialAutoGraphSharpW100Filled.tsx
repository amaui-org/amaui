import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoGraphSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraphSharpW100Filled'
      short_name='AutoGraph'

      {...props}
    >
      <path d="M4.15 19.6 3.65 19.1 10.25 12.5 14.25 16.5 21.2 8.5 21.7 8.95 14.3 17.55 10.25 13.5ZM3.75 12.425 3.3 11.45 2.325 11 3.3 10.55 3.75 9.575 4.2 10.55 5.175 11 4.2 11.45ZM14.75 10.425 14.3 9.45 13.325 9 14.3 8.55 14.75 7.575 15.2 8.55 16.175 9 15.2 9.45ZM8.25 7.425 7.65 6.1 6.325 5.5 7.65 4.9 8.25 3.575 8.85 4.9 10.175 5.5 8.85 6.1Z"/>
    </Icon>
  );
});

IconMaterialAutoGraphSharpW100Filled.displayName = 'AmauiIconMaterialAutoGraphSharpW100Filled';

export default IconMaterialAutoGraphSharpW100Filled;
