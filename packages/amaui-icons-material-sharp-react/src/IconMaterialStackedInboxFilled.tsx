import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedInboxFilled'

      short_name='StackedInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-560h720v560H200Zm360-200q33 0 56.5-23.5T640-560h200v-200H280v200h200q0 33 23.5 56.5T560-480Zm200 360H40v-560h80v480h640v80Z"/>
    </Icon>
  );
});

IconMaterialStackedInboxFilled.displayName = 'AmauiIconMaterialStackedInboxFilled';

export default IconMaterialStackedInboxFilled;
