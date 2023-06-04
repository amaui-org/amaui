import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100Filled'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.8 20.7q-.625 0-1.062-.438Q9.3 19.825 9.3 19.2v-8.6l-2-3V6.35h9.4V7.6l-2 3v8.6q0 .625-.437 1.062-.438.438-1.063.438Zm1.2-5.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-4.7-9.2V4.8q0-.625.438-1.063Q8.175 3.3 8.8 3.3h6.4q.625 0 1.062.437.438.438.438 1.063v.85Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100Filled.displayName = 'AmauiIconMaterialFlashlightOnW100Filled';

export default IconMaterialFlashlightOnW100Filled;
