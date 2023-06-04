import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentW100'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 13.35h10.7v-.7H6.65Zm0-3h10.7v-.7H6.65Zm0-3h10.7v-.7H6.65ZM20.7 19.5l-2.8-2.8H3.3V3.3h17.4ZM20 4H4v12h14.2l1.8 1.8ZM4 16V4Z"/>
    </Icon>
  );
});

IconMaterialCommentW100.displayName = 'AmauiIconMaterialCommentW100';

export default IconMaterialCommentW100;
