import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpW100Filled'

      short_name='ThumbUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 19.7q-.625 0-1.062-.438-.438-.437-.438-1.062V9.925q0-.3.125-.588Q7.8 9.05 8 8.85l5.075-5.025q.175-.175.375-.225.2-.05.375.025.175.075.25.275.075.2.025.475l-1 4.925h7.1q.575 0 1.038.462.462.463.462 1.038v1q0 .125-.025.275-.025.15-.075.275l-2.65 6.3q-.2.45-.675.75-.475.3-.975.3Zm-4.25 0q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2v-7.4q0-.625.437-1.063Q4.175 9.3 4.8 9.3h.55q.625 0 1.063.437.437.438.437 1.063v7.425q0 .625-.437 1.05-.438.425-1.063.425Z"/>
    </Icon>
  );
});

IconMaterialThumbUpW100Filled.displayName = 'AmauiIconMaterialThumbUpW100Filled';

export default IconMaterialThumbUpW100Filled;
