import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewRealSizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewRealSizeW100Filled'

      short_name='ViewRealSize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M323-332v-268h-71v-28h99v296h-28Zm141 0v-28h28v28h-28Zm176 0v-268h-70v-28h98v296h-28ZM464-466v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialViewRealSizeW100Filled.displayName = 'AmauiIconMaterialViewRealSizeW100Filled';

export default IconMaterialViewRealSizeW100Filled;
