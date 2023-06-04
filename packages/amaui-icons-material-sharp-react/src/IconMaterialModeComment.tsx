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
      <path d="m22 22-4-4H2V2h20ZM20 4H4v12h14.825L20 17.175ZM4 16V4Z"/>
    </Icon>
  );
});

IconMaterialModeComment.displayName = 'AmauiIconMaterialModeComment';

export default IconMaterialModeComment;
