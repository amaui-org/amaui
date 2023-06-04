import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeW100'

      short_name='CropFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 9q-.15 0-.25-.1t-.1-.25V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.35 0-.575.225Q5 5.45 5 5.8v2.85q0 .15-.1.25t-.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .35.225.575Q5.45 19 5.8 19h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm9.55 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.35 0 .575-.225Q19 18.55 19 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .65-.425 1.075-.425.425-1.075.425Zm4-10.7q-.15 0-.25-.1t-.1-.25V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-2.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.65 0 1.075.425.425.425.425 1.075v2.85q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCropFreeW100.displayName = 'AmauiIconMaterialCropFreeW100';

export default IconMaterialCropFreeW100;
