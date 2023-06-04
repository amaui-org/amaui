import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 13.3 5.55 8.75q-.125-.05-.187-.175-.063-.125-.013-.25t.175-.188q.125-.062.25-.012L18.25 12.65q.8.3 1.125.9.325.6.325 1.25v2.4q0 .65-.425 1.075-.425.425-1.075.425H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2v-2.4q0-.65.425-1.075Q5.15 13.3 5.8 13.3Zm.1 4.7q.3 0 .55-.25.25-.25.25-.55v-2.4q0-.3-.25-.55-.25-.25-.55-.25H5.8q-.3 0-.55.25-.25.25-.25.55v2.4q0 .3.25.55.25.25.55.25Zm-7.65-1.65H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6.45q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM7 16.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2ZM5 18v-4 4Z"/>
    </Icon>
  );
});

IconMaterialScannerW100.displayName = 'AmauiIconMaterialScannerW100';

export default IconMaterialScannerW100;
