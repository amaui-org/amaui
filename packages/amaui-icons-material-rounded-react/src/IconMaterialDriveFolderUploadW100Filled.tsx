import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100Filled'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.225V12.1h.975q.275 0 .388-.237.112-.238-.088-.438l-1.35-1.35Q12.15 9.95 12 9.95q-.15 0-.275.125l-1.35 1.35q-.2.2-.087.438.112.237.387.237h.975ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .575.112.275.113.5.338l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100Filled.displayName = 'AmauiIconMaterialDriveFolderUploadW100Filled';

export default IconMaterialDriveFolderUploadW100Filled;
