import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocumentScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScanner'

      short_name='DocumentScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 6V1h5v2H4v3Zm18 0V3h-3V1h5v5ZM2 23v-5h2v3h3v2Zm15 0v-2h3v-3h2v5ZM7 18h10V6H7Zm-2 2V4h14v16Zm4-10h6V8H9Zm0 3h6v-2H9Zm0 3h6v-2H9Zm-2 2V6Z"/>
    </Icon>
  );
});

IconMaterialDocumentScanner.displayName = 'AmauiIconMaterialDocumentScanner';

export default IconMaterialDocumentScanner;
