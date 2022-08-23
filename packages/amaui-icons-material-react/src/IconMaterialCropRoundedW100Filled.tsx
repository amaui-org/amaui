import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRoundedW100Filled'
      short_name='Crop'

      {...props}
    >
      <path d="M17.65 16.95V7.15Q17.65 6.85 17.4 6.6Q17.15 6.35 16.85 6.35H7.05V5.65H16.85Q17.5 5.65 17.925 6.075Q18.35 6.5 18.35 7.15V16.95ZM18 22.35Q17.85 22.35 17.75 22.25Q17.65 22.15 17.65 22V18.35H7.15Q6.5 18.35 6.075 17.925Q5.65 17.5 5.65 16.85V6.35H2Q1.85 6.35 1.75 6.25Q1.65 6.15 1.65 6Q1.65 5.85 1.75 5.75Q1.85 5.65 2 5.65H5.65V2Q5.65 1.85 5.75 1.75Q5.85 1.65 6 1.65Q6.15 1.65 6.25 1.75Q6.35 1.85 6.35 2V16.85Q6.35 17.15 6.6 17.4Q6.85 17.65 7.15 17.65H22Q22.15 17.65 22.25 17.75Q22.35 17.85 22.35 18Q22.35 18.15 22.25 18.25Q22.15 18.35 22 18.35H18.35V22Q18.35 22.15 18.25 22.25Q18.15 22.35 18 22.35Z"/>
    </Icon>
  );
});

IconMaterialCropRoundedW100Filled.displayName = 'AmauiIconMaterialCropRoundedW100Filled';

export default IconMaterialCropRoundedW100Filled;
