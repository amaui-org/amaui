import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGo'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m720 936-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160Zm-600 0V256h640v283q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5V336H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120 936Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm-80 80V336v400Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGo.displayName = 'AmauiIconMaterialChatPasteGo';

export default IconMaterialChatPasteGo;
