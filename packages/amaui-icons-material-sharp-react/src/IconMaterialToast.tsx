import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toast'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h480v-80H240v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialToast.displayName = 'AmauiIconMaterialToast';

export default IconMaterialToast;
