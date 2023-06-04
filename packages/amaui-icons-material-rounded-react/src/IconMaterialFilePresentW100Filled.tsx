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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .575.112.275.113.5.338l3.15 3.15q.225.225.337.5.113.275.113.575V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm8.25-13H18L14.3 4v2.95q0 .325.213.537.212.213.537.213ZM12 17.975q1.275 0 2.137-.95.863-.95.863-2.275v-4.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.4q0 1.025-.662 1.775-.663.75-1.638.75-.975 0-1.637-.75-.663-.75-.663-1.775V9.3q0-.45.275-.788.275-.337.7-.337.425 0 .7.337.275.338.275.788v5.1q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V9.3q0-.725-.475-1.275-.475-.55-1.2-.55t-1.2.55Q9 8.575 9 9.3v5.45q0 1.325.863 2.275.862.95 2.137.95Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100Filled.displayName = 'AmauiIconMaterialFilePresentW100Filled';

export default IconMaterialFilePresentW100Filled;
