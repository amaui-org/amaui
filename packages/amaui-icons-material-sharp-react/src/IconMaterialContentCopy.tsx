import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopy'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18V2h13v16Zm2-2h9V4H9Zm-6 6V6h2v14h11v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialContentCopy.displayName = 'AmauiIconMaterialContentCopy';

export default IconMaterialContentCopy;
