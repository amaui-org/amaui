import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakingNewsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNewsFilled'

      short_name='BreakingNews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h80v-80h-80v80Zm0-160h80v-240h-80v240Zm200 160h280v-80H440v80Zm0-160h280v-80H440v80Zm0-160h280v-80H440v80ZM80-120v-720h800v720H80Z"/>
    </Icon>
  );
});

IconMaterialBreakingNewsFilled.displayName = 'AmauiIconMaterialBreakingNewsFilled';

export default IconMaterialBreakingNewsFilled;
