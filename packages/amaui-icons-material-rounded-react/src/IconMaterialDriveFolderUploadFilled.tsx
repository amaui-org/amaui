import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadFilled'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16q0 .425.288.712.287.288.712.288t.713-.275q.287-.275.287-.7V13h1.8q.35 0 .462-.312.113-.313-.112-.538l-2.8-2.8Q12.2 9.2 12 9.2q-.2 0-.35.15l-2.8 2.8q-.225.225-.112.538Q8.85 13 9.2 13H11Zm-7 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadFilled.displayName = 'AmauiIconMaterialDriveFolderUploadFilled';

export default IconMaterialDriveFolderUploadFilled;
