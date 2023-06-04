import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholdingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingW100Filled'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm11.075-.7h.975L19 16.35V16h-.625ZM7.65 13.075l3.025-3 2 2 4.15-4.175-.475-.475-3.675 3.675-2-2-3.5 3.5ZM5.475 19l3-3H7.5L5 18.5Zm7.25 0 3-3h-.975l-3 3ZM9.1 19l3-3h-.975l-3 3Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100Filled.displayName = 'AmauiIconMaterialDataThresholdingW100Filled';

export default IconMaterialDataThresholdingW100Filled;
