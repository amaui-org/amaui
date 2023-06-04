import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandW100Filled'

      short_name='FrontHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 22.1q-1.35 0-2.55-.45-1.2-.45-2.1-1.25-.9-.8-1.425-1.925T6.1 16V5.45h2.1v6.2h.7V2.7H11v8.95h.7V1.8h2.05v9.85h.7V4.1h2.05v9.25q-1.675.55-2.625 1.575T12.6 17.6h.7q.25-1.25 1.15-2.288.9-1.037 2.75-1.462V10.3h2.1V16q0 1.35-.525 2.475T17.35 20.4q-.9.8-2.1 1.25-1.2.45-2.55.45Z"/>
    </Icon>
  );
});

IconMaterialFrontHandW100Filled.displayName = 'AmauiIconMaterialFrontHandW100Filled';

export default IconMaterialFrontHandW100Filled;
