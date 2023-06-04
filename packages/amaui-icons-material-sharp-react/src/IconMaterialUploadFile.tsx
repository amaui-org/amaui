import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFile'

      short_name='UploadFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825Zm-7 3V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialUploadFile.displayName = 'AmauiIconMaterialUploadFile';

export default IconMaterialUploadFile;
