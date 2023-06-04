import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropW100Filled'

      short_name='Crop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 16.95v-9.8q0-.3-.25-.55-.25-.25-.55-.25h-9.8v-.7h9.8q.65 0 1.075.425.425.425.425 1.075v9.8Zm.35 5.4q-.15 0-.25-.1t-.1-.25v-3.65H7.15q-.65 0-1.075-.425-.425-.425-.425-1.075V6.35H2q-.15 0-.25-.1T1.65 6q0-.15.1-.25t.25-.1h3.65V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14.85q0 .3.25.55.25.25.55.25H22q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.65V22q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCropW100Filled.displayName = 'AmauiIconMaterialCropW100Filled';

export default IconMaterialCropW100Filled;
