import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdfScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerW100Filled'

      short_name='AdfScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 19.2v-6.4H7.3V5.1h9.4v7.7h3.25v6.4ZM8 12.8h8v-7H8Zm9.5 3.2q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 14 17.5 14t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerW100Filled.displayName = 'AmauiIconMaterialAdfScannerW100Filled';

export default IconMaterialAdfScannerW100Filled;
