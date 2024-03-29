import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeft'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.9 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.687-.288Q18 6.4 18.3 6.7q.275.275.275.7 0 .425-.275.7L14.425 12l3.875 3.9q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275Zm-6.6 0-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.688-.288.412-.012.712.288.275.275.275.7 0 .425-.275.7L7.825 12l3.875 3.9q.275.275.288.687Q12 17 11.7 17.3q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeft.displayName = 'AmauiIconMaterialKeyboardDoubleArrowLeft';

export default IconMaterialKeyboardDoubleArrowLeft;
