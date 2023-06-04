import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyW100Filled'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 17.7V2.3h8.35l4.05 4.05V17.7Zm-4 4V8.3H4V21h9.7v.7Zm12-15H19L15.3 3Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100Filled.displayName = 'AmauiIconMaterialFileCopyW100Filled';

export default IconMaterialFileCopyW100Filled;
