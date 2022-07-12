import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharpW100Filled'
      short_name='FileCopy'

      {...props}
    >
      <path d="M7.3 17.7V2.3H15.65L19.7 6.35V17.7ZM3.3 21.7V8.3H4V21H13.7V21.7ZM15.3 6.7H19L15.3 3Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopySharpW100Filled;
