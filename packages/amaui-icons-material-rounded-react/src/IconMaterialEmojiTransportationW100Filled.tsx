import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiTransportationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportationW100Filled'

      short_name='EmojiTransportation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 20.2q-.15 0-.25-.1t-.1-.25v-5.4l.025-.2L11.5 10.5q.05-.075.1-.113.05-.037.2-.037h7.1q.125 0 .2.037.075.038.1.113l1.325 3.75q.025.05.025.2v5.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.4h-9v1.4q0 .15-.1.25t-.25.1Zm.65-6.55h8.4l-.9-2.6h-6.6Zm1.3 3.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm5.8 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-11.8-4.6v-1.4h1.4v1.4Zm3.7-4.7V6.1h1.4v1.4Zm-3.7 8.7v-1.4h1.4v1.4Zm0 4v-1.4h1.4v1.4Zm-3 0V8.5q0-.275.213-.488.212-.212.487-.212h3v-4q0-.275.213-.488.212-.212.487-.212h6q.275 0 .488.212.212.213.212.488v4.25h-.7V3.8h-6v4.7h-3.7v11.7Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportationW100Filled.displayName = 'AmauiIconMaterialEmojiTransportationW100Filled';

export default IconMaterialEmojiTransportationW100Filled;
