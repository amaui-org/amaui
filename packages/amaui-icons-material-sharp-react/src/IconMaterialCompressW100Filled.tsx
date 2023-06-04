import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressW100Filled'

      short_name='Compress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.5v-4.4L9.4 19.35l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v4.4Zm-7-8.3v-.7h14.7v.7Zm0-2.7v-.7h14.7v.7ZM12 7.25l-3.1-3.1.5-.5 2.25 2.25V1.5h.7v4.4l2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialCompressW100Filled.displayName = 'AmauiIconMaterialCompressW100Filled';

export default IconMaterialCompressW100Filled;
