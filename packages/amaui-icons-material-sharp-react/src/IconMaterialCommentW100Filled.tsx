import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentW100Filled'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 13.35h10.7v-.7H6.65Zm0-3h10.7v-.7H6.65Zm0-3h10.7v-.7H6.65ZM20.7 19.5l-2.8-2.8H3.3V3.3h17.4Z"/>
    </Icon>
  );
});

IconMaterialCommentW100Filled.displayName = 'AmauiIconMaterialCommentW100Filled';

export default IconMaterialCommentW100Filled;
