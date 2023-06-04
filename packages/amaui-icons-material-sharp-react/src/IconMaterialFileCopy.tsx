import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopy'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19V1h9l6 6v12Zm8-11V3H8v14h11V8ZM2 23V7h2v14h11v2Zm6-6V3v5-5 14Z"/>
    </Icon>
  );
});

IconMaterialFileCopy.displayName = 'AmauiIconMaterialFileCopy';

export default IconMaterialFileCopy;
