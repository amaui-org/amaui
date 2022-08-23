import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFileRenameOutlineRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutlineRounded'
      short_name='DriveFileRenameOutline'

      {...props}
    >
      <path d="M10 21 14 17H20Q20.825 17 21.413 17.587Q22 18.175 22 19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H5.4L14.025 10.375L12.625 8.975L4 17.6ZM18.3 8.925 14.05 4.725 15.45 3.325Q16.025 2.75 16.863 2.75Q17.7 2.75 18.275 3.325L19.675 4.725Q20.25 5.3 20.275 6.113Q20.3 6.925 19.725 7.5ZM3 21Q2.575 21 2.288 20.712Q2 20.425 2 20V17.175Q2 16.975 2.075 16.788Q2.15 16.6 2.3 16.45L12.6 6.15L16.85 10.4L6.55 20.7Q6.4 20.85 6.213 20.925Q6.025 21 5.825 21ZM13.325 9.675 12.625 8.975 14.025 10.375Z"/>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutlineRounded.displayName = 'AmauiIconMaterialDriveFileRenameOutlineRounded';

export default IconMaterialDriveFileRenameOutlineRounded;
