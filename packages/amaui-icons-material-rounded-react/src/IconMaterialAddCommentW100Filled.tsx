import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentW100Filled'

      short_name='AddComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.35q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V13q0 .15.1.25t.25.1ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialAddCommentW100Filled.displayName = 'AmauiIconMaterialAddCommentW100Filled';

export default IconMaterialAddCommentW100Filled;
