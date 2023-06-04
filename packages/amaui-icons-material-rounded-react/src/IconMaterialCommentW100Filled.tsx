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
      <path d="M7 13.35h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm12.425 10.875L17.9 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v12.9q0 .5-.462.687-.463.188-.813-.162Z"/>
    </Icon>
  );
});

IconMaterialCommentW100Filled.displayName = 'AmauiIconMaterialCommentW100Filled';

export default IconMaterialCommentW100Filled;
