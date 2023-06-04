import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100Filled'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11.35h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-4h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm9.6 12.425L15.375 15.6q-.35-.45-.825-.7-.475-.25-1.05-.25H5.3V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .15-.025.3t-.075.275ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-3.85h8.2q.4 0 .738.175.337.175.587.5l3.325 4.35q-.2.15-.438.237-.237.088-.512.088Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100Filled.displayName = 'AmauiIconMaterialLabProfileW100Filled';

export default IconMaterialLabProfileW100Filled;
