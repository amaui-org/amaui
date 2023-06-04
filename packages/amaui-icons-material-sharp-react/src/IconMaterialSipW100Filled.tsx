import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipW100Filled'

      short_name='Sip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.6h.7V9.4h-.7Zm2.75 0h.7v-2h3.5V9.4h-4.2Zm.7-2.7v-1.8h2.8v1.8Zm-9.7 2.7h4.2v-2.95H6.1V10.1h3.5v-.7H5.4v2.95h3.5v1.55H5.4Zm-.6 4.1q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSipW100Filled.displayName = 'AmauiIconMaterialSipW100Filled';

export default IconMaterialSipW100Filled;
