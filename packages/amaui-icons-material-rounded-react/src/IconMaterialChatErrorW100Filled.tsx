import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorW100Filled'

      short_name='ChatError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m244 764-61 61q-14 14-32.5 6.5T132 804V288q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm236-248 95 94q4 4 9.5 3.5t9.5-4.5q4-4 4-9t-4-9l-94-95 94-95q4-4 3.5-9.5T593 382q-4-4-9-4t-9 4l-95 94-95-94q-4-4-9.5-3.5T366 383q-4 4-4 9t4 9l94 95-94 95q-4 4-3.5 9.5t4.5 9.5q4 4 9 4t9-4l95-94Z"/>
    </Icon>
  );
});

IconMaterialChatErrorW100Filled.displayName = 'AmauiIconMaterialChatErrorW100Filled';

export default IconMaterialChatErrorW100Filled;
