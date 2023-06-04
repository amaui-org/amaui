import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoW100Filled'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m720 899-20-19 89-90H586v-28h203l-89-90 20-19 123 123-123 123ZM286 470h308v-28H286v28Zm0 160h188v-28H286v28ZM146 873V282h588v254h-28q-94 0-160 65.917Q480 667.833 480 762v28H229l-83 83Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoW100Filled.displayName = 'AmauiIconMaterialChatPasteGoW100Filled';

export default IconMaterialChatPasteGoW100Filled;
