import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeComment'

      short_name='ModeComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.3 20.3 18 18H4q-.825 0-1.412-.587Q2 16.825 2 16V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v15.575q0 .675-.612.937-.613.263-1.088-.212ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/>
    </Icon>
  );
});

IconMaterialModeComment.displayName = 'AmauiIconMaterialModeComment';

export default IconMaterialModeComment;
