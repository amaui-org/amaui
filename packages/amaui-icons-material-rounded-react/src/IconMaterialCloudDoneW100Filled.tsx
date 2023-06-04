import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneW100Filled'

      short_name='CloudDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.725 1.238-2.963Q4.775 10.3 6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Zm3.85-2.9q.15 0 .275-.05.125-.05.25-.175L14.85 11.6q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-4 4-1.9-1.9q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l1.875 1.875q.125.125.25.175.125.05.275.05Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneW100Filled.displayName = 'AmauiIconMaterialCloudDoneW100Filled';

export default IconMaterialCloudDoneW100Filled;
