import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFile'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18h6v-2l2 1.05v-4.1L14 14v-2H8Zm-4 4V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialVideoFile.displayName = 'AmauiIconMaterialVideoFile';

export default IconMaterialVideoFile;
