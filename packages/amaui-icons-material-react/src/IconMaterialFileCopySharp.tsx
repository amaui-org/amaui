import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharp'
      short_name='FileCopy'

      {...props}
    >
      <path d="M6 19V1H15L21 7V19ZM14 8V3H8V17H19V8ZM2 23V7H4V21H15V23ZM8 17V3V8V3V8V17Z"/>
    </Icon>
  );
});

IconMaterialFileCopySharp.displayName = 'AmauiIconMaterialFileCopySharp';

export default IconMaterialFileCopySharp;
