import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedInbox'

      short_name='StackedInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-560h720v560H200Zm80-200v120h560v-120H698q-21 36-57 58t-81 22q-45 0-81-22t-57-58H280Zm280 0q33 0 56.5-23.5T640-560h200v-200H280v200h200q0 33 23.5 56.5T560-480Zm200 360H40v-560h80v480h640v80ZM280-360h560-560Z"/>
    </Icon>
  );
});

IconMaterialStackedInbox.displayName = 'AmauiIconMaterialStackedInbox';

export default IconMaterialStackedInbox;
