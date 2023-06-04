import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyFilled'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18V2h13v16Zm-4 4V6h2v14h11v2Z"/>
    </Icon>
  );
});

IconMaterialContentCopyFilled.displayName = 'AmauiIconMaterialContentCopyFilled';

export default IconMaterialContentCopyFilled;
