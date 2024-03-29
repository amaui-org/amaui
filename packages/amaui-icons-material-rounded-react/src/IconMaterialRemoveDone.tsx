import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDone'

      short_name='RemoveDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.975 21.1-5.9-5.9-2.15 2.15q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-4.25-4.25Q7 12.825 7 12.387q0-.437.275-.712.275-.275.713-.275.437 0 .712.275l3.525 3.525 1.4-1.4-9.65-9.65Q3.7 3.875 3.7 3.438q0-.438.275-.713.275-.275.713-.275.437 0 .712.275l17 17q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Zm-3.1-8.7-1.4-1.4L20.7 6.775q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7Zm-2.85-2.85-1.4-1.4 1.45-1.45q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7Zm-8.45 8.075q-.2 0-.375-.063-.175-.062-.325-.212l-4.25-4.25q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.55 3.55 1.4 1.4-.7.7q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialRemoveDone.displayName = 'AmauiIconMaterialRemoveDone';

export default IconMaterialRemoveDone;
