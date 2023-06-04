import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100Filled'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 13.3 5.55 8.75q-.125-.05-.162-.175-.038-.125-.038-.25.05-.125.175-.188.125-.062.25-.012L18.25 12.65q.8.3 1.125.9.325.6.325 1.25v2.4q0 .65-.425 1.075-.425.425-1.075.425H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2v-2.4q0-.65.425-1.075Q5.15 13.3 5.8 13.3Zm-7.55 3.05H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6.45q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM7 16.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Z"/>
    </Icon>
  );
});

IconMaterialScannerW100Filled.displayName = 'AmauiIconMaterialScannerW100Filled';

export default IconMaterialScannerW100Filled;
