import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageSharpW100Filled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M6 13.5 4.3 11.8V4.3H19.7V11.2L18 9.5L14 13.5L10 9.5ZM4.3 19.7V12.8L6 14.5L10 10.5L14 14.5L18 10.5L19.7 12.2V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageSharpW100Filled;
