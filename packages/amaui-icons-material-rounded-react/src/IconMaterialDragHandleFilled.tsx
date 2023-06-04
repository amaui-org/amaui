import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragHandleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleFilled'

      short_name='DragHandle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.425 0-.713-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14q.425 0 .712.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11Zm0 4q-.425 0-.713-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 15 19 15Z"/>
    </Icon>
  );
});

IconMaterialDragHandleFilled.displayName = 'AmauiIconMaterialDragHandleFilled';

export default IconMaterialDragHandleFilled;
