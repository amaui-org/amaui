import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateW100Filled'

      short_name='Update'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.275 15.75-3.6-3.6V7h.7v4.85l3.4 3.4Zm-3.25 3.95q-1.6 0-3-.6t-2.45-1.65Q5.525 16.4 4.925 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45 1.05-1.05 2.45-1.65 1.4-.6 3-.6 1.625 0 3.1.662 1.475.663 2.6 1.838V4.4h.7V8h-3.6v-.7h2.4q-1.05-1.075-2.375-1.688Q13.525 5 12.025 5 9.1 5 7.062 7.037 5.025 9.075 5.025 12q0 2.925 2.037 4.962Q9.1 19 12.025 19q2.625 0 4.563-1.712Q18.525 15.575 18.95 13h.7q-.35 2.9-2.525 4.8t-5.1 1.9Z"/>
    </Icon>
  );
});

IconMaterialUpdateW100Filled.displayName = 'AmauiIconMaterialUpdateW100Filled';

export default IconMaterialUpdateW100Filled;
