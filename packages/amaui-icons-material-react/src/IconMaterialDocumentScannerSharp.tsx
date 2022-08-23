import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocumentScannerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerSharp'
      short_name='DocumentScanner'

      {...props}
    >
      <path d="M2 6V1H7V3H4V6ZM20 6V3H17V1H22V6ZM2 23V18H4V21H7V23ZM17 23V21H20V18H22V23ZM7 18H17V6H7ZM5 20V4H19V20ZM9 10H15V8H9ZM9 13H15V11H9ZM9 16H15V14H9ZM7 18V6Z"/>
    </Icon>
  );
});

IconMaterialDocumentScannerSharp.displayName = 'AmauiIconMaterialDocumentScannerSharp';

export default IconMaterialDocumentScannerSharp;
