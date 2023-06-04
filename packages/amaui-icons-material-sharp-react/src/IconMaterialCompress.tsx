import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Compress'

      short_name='Compress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-3.2l-1.6 1.6L8 19l4-4 4 4-1.4 1.4-1.6-1.55V22Zm-7-8v-2h16v2Zm0-3V9h16v2Zm8-3L8 4l1.4-1.4L11 4.2V1h2v3.2l1.6-1.6L16 4Z"/>
    </Icon>
  );
});

IconMaterialCompress.displayName = 'AmauiIconMaterialCompress';

export default IconMaterialCompress;
