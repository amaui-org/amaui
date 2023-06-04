import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightW100Filled'

      short_name='SubdirectoryArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 20.1-.5-.5 4.25-4.25H5.65V4.65h.7v10h11.4L13.5 10.4l.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightW100Filled.displayName = 'AmauiIconMaterialSubdirectoryArrowRightW100Filled';

export default IconMaterialSubdirectoryArrowRightW100Filled;
