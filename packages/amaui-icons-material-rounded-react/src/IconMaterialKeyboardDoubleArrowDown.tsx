import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDown'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.575q-.2 0-.375-.063-.175-.062-.325-.212L6.7 7.7q-.275-.275-.287-.688Q6.4 6.6 6.7 6.3q.275-.275.7-.275.425 0 .7.275l3.9 3.875L15.9 6.3q.275-.275.687-.288Q17 6 17.3 6.3q.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Zm0 6q-.2 0-.375-.063-.175-.062-.325-.212l-4.6-4.6q-.275-.275-.287-.688Q6.4 12.6 6.7 12.3q.275-.275.7-.275.425 0 .7.275l3.9 3.875 3.9-3.875q.275-.275.687-.288Q17 12 17.3 12.3q.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDown.displayName = 'AmauiIconMaterialKeyboardDoubleArrowDown';

export default IconMaterialKeyboardDoubleArrowDown;
