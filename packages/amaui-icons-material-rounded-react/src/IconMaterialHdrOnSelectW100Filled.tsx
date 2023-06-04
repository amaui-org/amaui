import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSelectW100Filled'

      short_name='HdrOnSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.9 21.6v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2ZM12 12.7q-1.95 0-3.325-1.375Q7.3 9.95 7.3 8q0-1.95 1.375-3.325Q10.05 3.3 12 3.3q1.95 0 3.325 1.375Q16.7 6.05 16.7 8q0 1.95-1.375 3.325Q13.95 12.7 12 12.7Zm1.4 8.9v-5.2h2.7q.65 0 1.075.425.425.425.425 1.075v.2q0 .425-.25.838-.25.412-.85.612l.9 2.05h-.75l-.9-2H14.1v2Zm.7-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2ZM.4 21.6v-5.2h.7v2h2.8v-2h.7v5.2h-.7v-2.5H1.1v2.5Zm6.5 0v-5.2h2.7q.6 0 1.05.45.45.45.45 1.05v2.2q0 .6-.45 1.05-.45.45-1.05.45Zm.7-.7h2q.3 0 .55-.25.25-.25.25-.55v-2.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSelectW100Filled.displayName = 'AmauiIconMaterialHdrOnSelectW100Filled';

export default IconMaterialHdrOnSelectW100Filled;
