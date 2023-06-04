import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentFilled'

      short_name='ModeComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 22-4-4H2V2h20Z"/>
    </Icon>
  );
});

IconMaterialModeCommentFilled.displayName = 'AmauiIconMaterialModeCommentFilled';

export default IconMaterialModeCommentFilled;
