import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterHdrW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrW100Filled'

      short_name='FilterHdr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.475 16.7 3.65-4.9 3.15 4.2h2.55l-2.3-3.05 3.6-4.8 6.4 8.55Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100Filled.displayName = 'AmauiIconMaterialFilterHdrW100Filled';

export default IconMaterialFilterHdrW100Filled;
