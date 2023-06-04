import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUploadW100Filled'

      short_name='CloudUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925h-6.15v-7.5l2.025 2.025q.1.1.238.1.137 0 .237-.1.125-.1.113-.25-.013-.15-.113-.25L12.525 10.4q-.225-.225-.525-.225-.3 0-.525.225L9.15 12.725q-.1.1-.112.25-.013.15.112.25.1.1.25.087.15-.012.25-.112l2-2v7.5Z"/>
    </Icon>
  );
});

IconMaterialCloudUploadW100Filled.displayName = 'AmauiIconMaterialCloudUploadW100Filled';

export default IconMaterialCloudUploadW100Filled;
