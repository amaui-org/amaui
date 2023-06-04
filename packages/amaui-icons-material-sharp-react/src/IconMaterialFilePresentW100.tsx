import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilePresentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentW100'

      short_name='FilePresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 20.7H5.3V3.3h9.35l4.05 4.05ZM18 20V7.7h-3.7V4H6v16ZM6 4v3.7V4v16Zm6 13.975q1.275 0 2.137-.95.863-.95.863-2.275V10h-.7v4.75q0 1.025-.662 1.775-.663.75-1.638.75-.975 0-1.637-.75-.663-.75-.663-1.775V9.3q0-.45.275-.788.275-.337.7-.337.425 0 .7.337.275.338.275.788v5.45h.7V9.3q0-.725-.475-1.275-.475-.55-1.2-.55t-1.2.55Q9 8.575 9 9.3v5.45q0 1.325.863 2.275.862.95 2.137.95Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100.displayName = 'AmauiIconMaterialFilePresentW100';

export default IconMaterialFilePresentW100;
