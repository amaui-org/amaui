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
      <path d="M7 13.35h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm12.425 10.875L17.9 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v12.9q0 .5-.462.687-.463.188-.813-.162ZM4 4.8V16h14.2l1.8 1.8v-13q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0 0v13V4 4.8Z"/>
    </Icon>
  );
});

IconMaterialCommentW100.displayName = 'AmauiIconMaterialCommentW100';

export default IconMaterialCommentW100;
