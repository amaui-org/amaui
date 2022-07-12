import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterSharpW700'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M2.15 21.85V2.15H13.925V5.3H5.3V18.7H18.7V10.075H21.85V21.85ZM12 16 10.75 13.25 8 12 10.75 10.75 12 8 13.25 10.75 16 12 13.25 13.25ZM17 10 16.05 7.95 14 7 16.05 6.05 17 4 17.95 6.05 20 7 17.95 7.95Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFilterSharpW700;
