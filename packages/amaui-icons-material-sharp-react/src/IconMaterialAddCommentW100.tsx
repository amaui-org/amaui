import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentW100'

      short_name='AddComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialAddCommentW100.displayName = 'AmauiIconMaterialAddCommentW100';

export default IconMaterialAddCommentW100;
