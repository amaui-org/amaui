import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslock'

      short_name='KeyboardCapslock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 12.3q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.213.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L12 8.4l-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275ZM7 18q-.425 0-.713-.288Q6 17.425 6 17t.287-.712Q6.575 16 7 16h10q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslock.displayName = 'AmauiIconMaterialKeyboardCapslock';

export default IconMaterialKeyboardCapslock;
