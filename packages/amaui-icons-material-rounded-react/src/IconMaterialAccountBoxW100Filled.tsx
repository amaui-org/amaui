import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100Filled'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.35q1.35-1.325 3.138-2.088Q9.925 15.5 12 15.5t3.863.762q1.787.763 3.137 2.088V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8Zm7-5.25q-1.2 0-2.025-.825T9.15 10.25q0-1.2.825-2.025T12 7.4q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T12 13.1Zm-6.2 6.6q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100Filled.displayName = 'AmauiIconMaterialAccountBoxW100Filled';

export default IconMaterialAccountBoxW100Filled;
