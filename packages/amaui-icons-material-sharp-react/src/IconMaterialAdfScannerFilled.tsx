import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdfScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerFilled'

      short_name='AdfScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-8h4V4h12v8h4v8Zm6-8h8V6H8Zm10 5q.425 0 .712-.288Q19 16.425 19 16t-.288-.713Q18.425 15 18 15t-.712.287Q17 15.575 17 16t.288.712Q17.575 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerFilled.displayName = 'AmauiIconMaterialAdfScannerFilled';

export default IconMaterialAdfScannerFilled;
