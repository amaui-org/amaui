import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 17.5q-.65 0-1.1-.425-.45-.425-.45-1.075V5.6q0-.65.45-1.075.45-.425 1.1-.425h7.35q.625 0 1.063.437.437.438.437 1.063V16q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h7.35q.375 0 .588-.225.212-.225.212-.575V5.6q0-.375-.212-.588-.213-.212-.588-.212H9.7q-.35 0-.6.212-.25.213-.25.588V16q0 .35.25.575.25.225.6.225Zm-2.75 3.4q-.625 0-1.062-.438-.438-.437-.438-1.062V8.45q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V18.7q0 .3.25.55.25.25.55.25h7.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.9-15.4v12-12Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100.displayName = 'AmauiIconMaterialContentCopyW100';

export default IconMaterialContentCopyW100;
