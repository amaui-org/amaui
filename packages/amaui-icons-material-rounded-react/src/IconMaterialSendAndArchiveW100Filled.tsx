import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveW100Filled'

      short_name='SendAndArchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 17.875-1.55-1.55q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l2 2q.175.175.4.175.225 0 .4-.175l2-2q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-1.55 1.55v-3.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25ZM4.55 16.95v-3.2q0-.275.163-.475.162-.2.437-.25L9.75 12l-4.6-1.025q-.275-.05-.437-.25-.163-.2-.163-.475v-3.3q0-.425.338-.65.337-.225.712-.05l10.625 4.575q-1.875.225-3.325 1.4-1.45 1.175-1.7 3L5.6 17.65q-.375.175-.712-.05-.338-.225-.338-.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveW100Filled.displayName = 'AmauiIconMaterialSendAndArchiveW100Filled';

export default IconMaterialSendAndArchiveW100Filled;
