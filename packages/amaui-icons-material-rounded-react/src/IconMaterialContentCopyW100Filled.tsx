import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100Filled'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 17.5q-.65 0-1.1-.425-.45-.425-.45-1.075V5.6q0-.65.45-1.075.45-.425 1.1-.425h7.35q.625 0 1.063.437.437.438.437 1.063V16q0 .625-.437 1.062-.438.438-1.063.438Zm-2.75 2.7q-.625 0-1.062-.438-.438-.437-.438-1.062V8.45q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V18.7q0 .3.25.55.25.25.55.25h7.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100Filled.displayName = 'AmauiIconMaterialContentCopyW100Filled';

export default IconMaterialContentCopyW100Filled;
