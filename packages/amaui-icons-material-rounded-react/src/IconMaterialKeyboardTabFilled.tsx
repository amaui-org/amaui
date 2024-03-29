import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabFilled'

      short_name='KeyboardTab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.3 17.3q-.275-.275-.275-.7 0-.425.275-.7l2.9-2.9H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h12.2l-2.9-2.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.212.325.063.175.063.375t-.063.375q-.062.175-.212.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Zm8.7.7q-.425 0-.712-.288Q20 17.425 20 17V7q0-.425.288-.713Q20.575 6 21 6t.712.287Q22 6.575 22 7v10q0 .425-.288.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabFilled.displayName = 'AmauiIconMaterialKeyboardTabFilled';

export default IconMaterialKeyboardTabFilled;
