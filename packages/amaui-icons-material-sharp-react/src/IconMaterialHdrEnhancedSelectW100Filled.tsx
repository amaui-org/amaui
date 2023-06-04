import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrEnhancedSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrEnhancedSelectW100Filled'

      short_name='HdrEnhancedSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.7q-1.95 0-3.325-1.375Q7.3 9.95 7.3 8q0-1.95 1.375-3.325Q10.05 3.3 12 3.3q1.95 0 3.325 1.375Q16.7 6.05 16.7 8q0 1.95-1.375 3.325Q13.95 12.7 12 12.7Zm-.35-2.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM20.9 21.6v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Zm-7.5 0v-5.2h4.2v3.15h-1.1l.9 2.05h-.75l-.9-2H14.1v2Zm.7-2.7h2.8v-1.8h-2.8ZM.4 21.6v-5.2h.7v2h2.8v-2h.7v5.2h-.7v-2.5H1.1v2.5Zm6.5 0v-5.2h2.7q.6 0 1.05.45.45.45.45 1.05v2.2q0 .6-.45 1.05-.45.45-1.05.45Zm.7-.7h2q.3 0 .55-.25.25-.25.25-.55v-2.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrEnhancedSelectW100Filled.displayName = 'AmauiIconMaterialHdrEnhancedSelectW100Filled';

export default IconMaterialHdrEnhancedSelectW100Filled;
