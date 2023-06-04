import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRawOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnW100'

      short_name='RawOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.925 14.6 1.8-5.2h1l1.8 5.2h-.75l-.55-1.55h-2l-.55 1.55Zm1.5-2.2h1.6l-.7-2.05h-.2Zm5.3 2.2-1.4-5.2h.725l1 3.675L17 9.4h.6l.95 3.675 1-3.675h.725l-1.4 5.2h-.625l-.95-3.525-.95 3.525ZM3.4 14.6V9.4h2.7q.6 0 1.05.45.45.45.45 1.05v.2q0 .425-.262.838-.263.412-.838.612l.9 2.05h-.75l-.9-2H4.1v2Zm.7-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialRawOnW100.displayName = 'AmauiIconMaterialRawOnW100';

export default IconMaterialRawOnW100;
