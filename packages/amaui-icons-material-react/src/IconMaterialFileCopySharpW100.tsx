import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharpW100'
      short_name='FileCopy'

      {...props}
    >
      <path d="M7.3 17.7V2.3H15.65L19.7 6.35V17.7ZM15.3 6.7V3H8V17H19V6.7ZM3.3 21.7V8.3H4V21H13.7V21.7ZM8 17V3V6.7V3V6.7V17Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopySharpW100;
