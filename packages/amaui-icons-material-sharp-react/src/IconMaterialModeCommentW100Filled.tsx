import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100Filled'

      short_name='ModeComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 19.5-2.8-2.8H3.3V3.3h17.4Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100Filled.displayName = 'AmauiIconMaterialModeCommentW100Filled';

export default IconMaterialModeCommentW100Filled;
