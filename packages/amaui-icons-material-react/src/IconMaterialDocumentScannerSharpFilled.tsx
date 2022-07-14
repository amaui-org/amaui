import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocumentScannerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerSharpFilled'
      short_name='DocumentScanner'

      {...props}
    >
      <path d="M2 6V1H7V3H4V6ZM20 6V3H17V1H22V6ZM2 23V18H4V21H7V23ZM17 23V21H20V18H22V23ZM5 20V4H19V20ZM9 10H15V8H9ZM9 13H15V11H9ZM9 16H15V14H9Z"/>
    </Icon>
  );
});

export default IconMaterialDocumentScannerSharpFilled;
