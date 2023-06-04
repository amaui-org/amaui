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
      <path d="M4.975 16.7q-.475 0-.675-.412-.2-.413.075-.788l2.15-2.9q.225-.3.6-.3t.6.3l1.95 2.575q.25.35.65.413.4.062.75-.213t.413-.675q.062-.4-.213-.75l-.75-1 3-4q.225-.3.6-.3t.6.3l4.9 6.55q.275.375.075.788-.2.412-.675.412Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100Filled.displayName = 'AmauiIconMaterialFilterHdrW100Filled';

export default IconMaterialFilterHdrW100Filled;
