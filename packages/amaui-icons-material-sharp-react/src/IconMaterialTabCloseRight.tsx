import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRight'

      short_name='TabCloseRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m366 746 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56ZM200 856V296v560Zm-80 80V216h720v414q-19-7-39-10.5t-41-3.5V296H200v560h320q0 21 3.5 41t10.5 39H120Zm640 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRight.displayName = 'AmauiIconMaterialTabCloseRight';

export default IconMaterialTabCloseRight;
