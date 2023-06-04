import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyFilled'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19V1h9l6 6v12Zm-4 4V7h2v14h11v2ZM14 8h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialFileCopyFilled.displayName = 'AmauiIconMaterialFileCopyFilled';

export default IconMaterialFileCopyFilled;
