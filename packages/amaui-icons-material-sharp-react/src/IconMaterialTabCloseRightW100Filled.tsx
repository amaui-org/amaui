import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightW100Filled'

      short_name='TabCloseRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m760 979-19-19 88-90H626v-28h203l-88-90 19-19 123 123-123 123Zm-588-95V268h616v366q-7-1-14-1.5t-14-.5q-43 0-80.5 15.5T612 689L499 576l114-114-19-19-114 114-114-114-19 19 114 114-114 114 19 19 114-114 113 113q-26 30-41.5 67.5T536 856q0 7 .5 14t1.5 14H172Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightW100Filled.displayName = 'AmauiIconMaterialTabCloseRightW100Filled';

export default IconMaterialTabCloseRightW100Filled;
