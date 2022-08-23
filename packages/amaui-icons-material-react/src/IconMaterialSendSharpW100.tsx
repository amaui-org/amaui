import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharpW100'
      short_name='Send'

      {...props}
    >
      <path d="M4.3 18.05V5.95L18.65 12ZM5 17 16.85 12 5 7V11L9.5 12L5 13ZM5 17V12V7V11V13Z"/>
    </Icon>
  );
});

IconMaterialSendSharpW100.displayName = 'AmauiIconMaterialSendSharpW100';

export default IconMaterialSendSharpW100;
