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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V7.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25ZM6 4v3.7V4v16V4Zm6 13.975q1.275 0 2.137-.95.863-.95.863-2.275v-4.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.4q0 1.025-.662 1.775-.663.75-1.638.75-.975 0-1.637-.75-.663-.75-.663-1.775V9.3q0-.45.275-.788.275-.337.7-.337.425 0 .7.337.275.338.275.788v5.1q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V9.3q0-.725-.475-1.275-.475-.55-1.2-.55t-1.2.55Q9 8.575 9 9.3v5.45q0 1.325.863 2.275.862.95 2.137.95Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100.displayName = 'AmauiIconMaterialFilePresentW100';

export default IconMaterialFilePresentW100;
