import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileW100'

      short_name='UploadFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 17.4h.7v-4.85l2.25 2.25.5-.5-3.1-3.1-3.1 3.1.5.5 2.25-2.25ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialUploadFileW100.displayName = 'AmauiIconMaterialUploadFileW100';

export default IconMaterialUploadFileW100;
