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
      <path d="M10.15 20.2v-5.85l1.4-4h7.6l1.4 4v5.85h-.7v-1.75h-9v1.75Zm1-6.55h8.4l-.9-2.6h-6.6Zm1.3 3.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm5.8 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-11.8-4.6v-1.4h1.4v1.4Zm3.7-4.7V6.1h1.4v1.4Zm-3.7 8.7v-1.4h1.4v1.4Zm0 4v-1.4h1.4v1.4Zm-3 0V7.8h3.7V3.1h7.4v4.95h-.7V3.8h-6v4.7h-3.7v11.7Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportationW100Filled.displayName = 'AmauiIconMaterialEmojiTransportationW100Filled';

export default IconMaterialEmojiTransportationW100Filled;
