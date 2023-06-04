import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontW100Filled'

      short_name='PhotoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 15.85h6.2v-.05q0-.8-.812-1.225-.813-.425-2.288-.425-1.475 0-2.287.425Q8.9 15 8.9 15.8Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 9.65 12 9.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontW100Filled.displayName = 'AmauiIconMaterialPhotoCameraFrontW100Filled';

export default IconMaterialPhotoCameraFrontW100Filled;
