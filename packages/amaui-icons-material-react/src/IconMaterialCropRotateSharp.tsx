import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropRotateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateSharp'
      short_name='CropRotate'

      {...props}
    >
      <path d="M15 13V9H11V7H17V13ZM15 19V17H7V9H5V7H7V5H9V15H19V17H17V19ZM8.55 0.5Q9.4 0.225 10.262 0.112Q11.125 0 12 0Q14.35 0 16.438 0.837Q18.525 1.675 20.138 3.162Q21.75 4.65 22.775 6.662Q23.8 8.675 24 11H22Q21.825 9.2 21.05 7.637Q20.275 6.075 19.062 4.875Q17.85 3.675 16.275 2.937Q14.7 2.2 12.9 2.05L14.45 3.6L13.05 5ZM15.45 23.5Q14.6 23.775 13.738 23.887Q12.875 24 12 24Q9.65 24 7.562 23.163Q5.475 22.325 3.863 20.837Q2.25 19.35 1.225 17.337Q0.2 15.325 0 13H2Q2.2 14.8 2.963 16.363Q3.725 17.925 4.938 19.125Q6.15 20.325 7.725 21.062Q9.3 21.8 11.1 21.95L9.55 20.4L10.95 19Z"/>
    </Icon>
  );
});

IconMaterialCropRotateSharp.displayName = 'AmauiIconMaterialCropRotateSharp';

export default IconMaterialCropRotateSharp;
