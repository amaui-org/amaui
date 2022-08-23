import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSharpW100'
      short_name='Crop'

      {...props}
    >
      <path d="M17.65 16.95V6.35H7.05V5.65H18.35V16.95ZM17.65 22.35V18.35H5.65V6.35H1.65V5.65H5.65V1.65H6.35V17.65H22.35V18.35H18.35V22.35Z"/>
    </Icon>
  );
});

IconMaterialCropSharpW100.displayName = 'AmauiIconMaterialCropSharpW100';

export default IconMaterialCropSharpW100;
