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
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm9.575-.7h.975L19 16.35V16h-.625ZM7.4 12.85q.1.1.25.1t.25-.1l2.775-2.775 1.475 1.475q.125.125.25.175.125.05.275.05.15 0 .275-.05.125-.05.25-.175l3.4-3.4q.1-.1.1-.25t-.1-.25q-.1-.1-.25-.1t-.25.1l-3.425 3.45L11.2 9.625q-.125-.125-.25-.175-.125-.05-.275-.05-.15 0-.275.05-.125.05-.25.175L7.4 12.35q-.1.1-.1.25t.1.25ZM5.475 19l3-3H7.5L5 18.5q.075.2.162.288.088.087.313.212Zm7.25 0 3-3h-.975l-3 3ZM9.1 19l3-3h-.975l-3 3Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100Filled.displayName = 'AmauiIconMaterialDataThresholdingW100Filled';

export default IconMaterialDataThresholdingW100Filled;
