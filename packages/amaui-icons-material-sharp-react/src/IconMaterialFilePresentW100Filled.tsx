import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilePresentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentW100Filled'

      short_name='FilePresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 20.7H5.3V3.3h9.35l4.05 4.05Zm-4.4-13H18L14.3 4ZM12 17.975q1.275 0 2.137-.95.863-.95.863-2.275V10h-.7v4.75q0 1.025-.662 1.775-.663.75-1.638.75-.975 0-1.637-.75-.663-.75-.663-1.775V9.3q0-.45.275-.788.275-.337.7-.337.425 0 .7.337.275.338.275.788v5.45h.7V9.3q0-.725-.475-1.275-.475-.55-1.2-.55t-1.2.55Q9 8.575 9 9.3v5.45q0 1.325.863 2.275.862.95 2.137.95Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100Filled.displayName = 'AmauiIconMaterialFilePresentW100Filled';

export default IconMaterialFilePresentW100Filled;
