import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlenderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderW100Filled'

      short_name='Blender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 20.7v-3l1.95-1.95-.75-5.15H5.65V4.3h5.5v-1h1.7v1h3.65l-1.75 11.45 1.95 1.95v3ZM6.35 9.9H8.4L7.65 5h-1.3ZM12 18.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-2.1-3.4h4.2L15.7 5H8.35Z"/>
    </Icon>
  );
});

IconMaterialBlenderW100Filled.displayName = 'AmauiIconMaterialBlenderW100Filled';

export default IconMaterialBlenderW100Filled;
