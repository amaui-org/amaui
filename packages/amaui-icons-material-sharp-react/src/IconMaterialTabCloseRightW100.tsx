import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightW100'

      short_name='TabCloseRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m366 709 114-114 114 114 19-19-114-114 114-114-19-19-114 114-114-114-19 19 114 114-114 114 19 19ZM200 856V296v560Zm-28 28V268h616v366q-7-1-14-1.5t-14-.5V296H200v560h336q0 7 .5 14t1.5 14H172Zm588 95-19-19 88-90H626v-28h203l-88-90 19-19 123 123-123 123Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightW100.displayName = 'AmauiIconMaterialTabCloseRightW100';

export default IconMaterialTabCloseRightW100;
