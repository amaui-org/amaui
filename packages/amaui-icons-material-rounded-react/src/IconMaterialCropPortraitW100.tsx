import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitW100'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.2 20.7H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425ZM6.8 20h10.4q.35 0 .575-.225Q18 19.55 18 19.2V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8v14.4q0 .35.225.575Q6.45 20 6.8 20ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100.displayName = 'AmauiIconMaterialCropPortraitW100';

export default IconMaterialCropPortraitW100;
