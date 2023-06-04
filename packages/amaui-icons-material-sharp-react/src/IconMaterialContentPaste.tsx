import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPaste = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPaste'

      short_name='ContentPaste'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5ZM3 21V3h6.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H21v18Zm2-2h14V5h-2v3H7V5H5Z"/>
    </Icon>
  );
});

IconMaterialContentPaste.displayName = 'AmauiIconMaterialContentPaste';

export default IconMaterialContentPaste;
