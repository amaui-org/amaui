import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoW100'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m720 899-20-19 89-90H586v-28h203l-89-90 20-19 123 123-123 123Zm-574-26V282h588v254h-28V310H174v452h306v28H229l-83 83Zm140-403h308v-28H286v28Zm0 160h188v-28H286v28ZM174 762V310v452Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoW100.displayName = 'AmauiIconMaterialChatPasteGoW100';

export default IconMaterialChatPasteGoW100;
