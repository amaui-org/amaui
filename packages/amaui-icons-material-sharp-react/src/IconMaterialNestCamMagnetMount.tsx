import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamMagnetMount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamMagnetMount'

      short_name='NestCamMagnetMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23 16.3q-.825 0-1.413-.587Q21 15.125 21 14.3v-4q0-.85.587-1.425Q22.175 8.3 23 8.3h1v8ZM8 6.275q2.1 0 3.55 1.45Q13 9.175 13 11.275q0 1-.375 1.913-.375.912-1.1 1.637L7.25 19.1.175 12.05l4.275-4.3q.725-.725 1.638-1.1Q7 6.275 8 6.275Zm0 2q-.575 0-1.125.225t-1 .675L3 12.05l4.25 4.25 2.875-2.875q.45-.45.675-1 .225-.55.225-1.125 0-1.275-.875-2.15T8 8.275Zm8.95 7.075L15.9 14.3l1.2-1.2H14v-1.5h3.2l-1.25-1.25L17 9.3l3 3Zm-9.925-3.075Z"/>
    </Icon>
  );
});

IconMaterialNestCamMagnetMount.displayName = 'AmauiIconMaterialNestCamMagnetMount';

export default IconMaterialNestCamMagnetMount;
