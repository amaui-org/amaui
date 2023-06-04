import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.8 20.7q-.625 0-1.062-.438Q9.3 19.825 9.3 19.2v-8.6l-2-3V4.8q0-.625.438-1.063Q8.175 3.3 8.8 3.3h6.4q.625 0 1.062.437.438.438.438 1.063v2.8l-2 3v8.6q0 .625-.437 1.062-.438.438-1.063.438Zm1.2-5.85q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-4-9.2h8V4.8q0-.35-.225-.575Q15.55 4 15.2 4H8.8q-.35 0-.575.225Q8 4.45 8 4.8Zm8 .7H8V7.4l2 3v8.8q0 .35.225.575.225.225.575.225h2.4q.35 0 .575-.225Q14 19.55 14 19.2v-8.8l2-3ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100.displayName = 'AmauiIconMaterialFlashlightOnW100';

export default IconMaterialFlashlightOnW100;
