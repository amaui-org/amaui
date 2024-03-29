import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFront'

      short_name='VideoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16h8v-.55q0-1.475-1.412-1.962Q11.175 13 10 13t-2.587.488Q6 13.975 6 15.45Zm4-4q.825 0 1.413-.588Q12 10.825 12 10t-.587-1.413Q10.825 8 10 8q-.825 0-1.412.587Q8 9.175 8 10q0 .825.588 1.412Q9.175 12 10 12Zm-8 8V4h16v6.5l4-4v11l-4-4V20Zm2-2h12V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFront.displayName = 'AmauiIconMaterialVideoCameraFront';

export default IconMaterialVideoCameraFront;
