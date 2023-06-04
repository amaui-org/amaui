import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100'

      short_name='ModeComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 19.5-2.8-2.8H3.3V3.3h17.4ZM20 4H4v12h14.2l1.8 1.8ZM4 16V4Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100.displayName = 'AmauiIconMaterialModeCommentW100';

export default IconMaterialModeCommentW100;
