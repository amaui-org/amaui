import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocumentScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerW100'

      short_name='DocumentScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 5.35v-3.7h3.7v.7h-3v3Zm18 0v-3h-3v-.7h3.7v3.7Zm-18 17v-3.7h.7v3h3v.7Zm15 0v-.7h3v-3h.7v3.7Zm-11.3-3.7h11.3V5.35H6.35Zm-.7.7V4.65h12.7v14.7Zm4-10h4.7v-.7h-4.7Zm0 3h4.7v-.7h-4.7Zm0 3h4.7v-.7h-4.7Zm-3.3 3.3V5.35Z"/>
    </Icon>
  );
});

IconMaterialDocumentScannerW100.displayName = 'AmauiIconMaterialDocumentScannerW100';

export default IconMaterialDocumentScannerW100;
