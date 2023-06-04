import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRawOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOffW100'

      short_name='RawOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 21.7 3.25 4.25l.5-.5L21.2 21.2Zm-2.45-7.1-.95-3.525-.7 2.675-1.5-1.5-.775-2.85h.725l1 3.675L17 9.4h.6l.95 3.675 1-3.675h.725l-1.4 5.2Zm-9.325 0 1.375-3.95.525.525-.4 1.225h1.625l.65.65h-2.475l-.55 1.55Zm-5.525 0V9.4h2.7q.6 0 1.05.45.45.45.45 1.05v.2q0 .425-.262.838-.263.412-.838.612l.9 2.05h-.75l-.9-2H4.1v2Zm.7-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialRawOffW100.displayName = 'AmauiIconMaterialRawOffW100';

export default IconMaterialRawOffW100;
