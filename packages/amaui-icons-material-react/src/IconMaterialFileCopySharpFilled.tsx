import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharpFilled'
      short_name='FileCopy'

      {...props}
    >
      <path d="M6 19V1H15L21 7V19ZM2 23V7H4V21H15V23ZM14 8H19L14 3Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopySharpFilled;
