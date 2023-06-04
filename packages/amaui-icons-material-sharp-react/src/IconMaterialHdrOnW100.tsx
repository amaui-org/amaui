import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnW100'

      short_name='HdrOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.4 14.6V9.4h4.2v3.15h-1.1l.9 2.05h-.75l-.9-2H17.1v2Zm.7-2.7h2.8v-1.8h-2.8ZM3.4 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm6.5 0V9.4h2.7q.6 0 1.05.45.45.45.45 1.05v2.2q0 .6-.45 1.05-.45.45-1.05.45Zm.7-.7h2q.3 0 .55-.25.25-.25.25-.55v-2.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOnW100.displayName = 'AmauiIconMaterialHdrOnW100';

export default IconMaterialHdrOnW100;
