import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardControlKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKeyFilled'

      short_name='KeyboardControlKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 12.7q-.275-.275-.275-.7 0-.425.275-.7l5.6-5.6q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l5.6 5.6q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275L12 7.825 7.1 12.7q-.275.275-.688.288Q6 13 5.7 12.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKeyFilled.displayName = 'AmauiIconMaterialKeyboardControlKeyFilled';

export default IconMaterialKeyboardControlKeyFilled;
