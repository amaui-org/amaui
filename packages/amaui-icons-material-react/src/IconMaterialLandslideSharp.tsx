import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandslideSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideSharp'
      short_name='Landslide'

      {...props}
    >
      <path d="M2 22H22L16 14L11 12L8 8H2ZM4 20V18.4L6 19.05L15.025 16.05L18 20ZM6 16.95 4 16.275V14.4L6 15.05L9.95 13.75L12.35 14.825ZM18.5 14 23 12V8L18.5 7L16 9V12ZM6 12.95 4 12.275V10H7L8.625 12.075ZM18.8 11.675 18 11.05V9.95L19 9.15L21 9.6V10.7ZM12 8 17 6V1L12 0L9 2V6ZM12.225 5.75 11 4.925V3.075L12.425 2.125L15 2.65V4.65Z"/>
    </Icon>
  );
});

IconMaterialLandslideSharp.displayName = 'AmauiIconMaterialLandslideSharp';

export default IconMaterialLandslideSharp;
