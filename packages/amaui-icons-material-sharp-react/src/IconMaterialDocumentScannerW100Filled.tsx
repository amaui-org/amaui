import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocumentScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerW100Filled'

      short_name='DocumentScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 5.35v-3.7h3.7v.7h-3v3Zm18 0v-3h-3v-.7h3.7v3.7Zm-18 17v-3.7h.7v3h3v.7Zm15 0v-.7h3v-3h.7v3.7Zm-12-3V4.65h12.7v14.7Zm4-10h4.7v-.7h-4.7Zm0 3h4.7v-.7h-4.7Zm0 3h4.7v-.7h-4.7Z"/>
    </Icon>
  );
});

IconMaterialDocumentScannerW100Filled.displayName = 'AmauiIconMaterialDocumentScannerW100Filled';

export default IconMaterialDocumentScannerW100Filled;
