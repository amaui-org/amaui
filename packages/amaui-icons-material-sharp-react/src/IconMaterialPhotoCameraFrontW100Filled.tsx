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
      <path d="M8.9 15.85h6.2v-.05q0-.8-.812-1.225-.813-.425-2.288-.425-1.475 0-2.287.425Q8.9 15 8.9 15.8Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 9.65 12 9.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388ZM3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontW100Filled.displayName = 'AmauiIconMaterialPhotoCameraFrontW100Filled';

export default IconMaterialPhotoCameraFrontW100Filled;
