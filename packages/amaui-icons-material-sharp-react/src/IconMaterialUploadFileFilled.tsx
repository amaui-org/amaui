import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileFilled'

      short_name='UploadFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825Zm-7 3V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialUploadFileFilled.displayName = 'AmauiIconMaterialUploadFileFilled';

export default IconMaterialUploadFileFilled;
