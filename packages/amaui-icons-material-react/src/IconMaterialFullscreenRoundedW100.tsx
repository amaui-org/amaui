import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenRoundedW100'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M5.75 19Q5.425 19 5.213 18.788Q5 18.575 5 18.25V14.35Q5 14.2 5.1 14.1Q5.2 14 5.35 14Q5.5 14 5.6 14.1Q5.7 14.2 5.7 14.35V18.3H9.65Q9.8 18.3 9.9 18.4Q10 18.5 10 18.65Q10 18.8 9.9 18.9Q9.8 19 9.65 19ZM5.35 10Q5.2 10 5.1 9.9Q5 9.8 5 9.65V5.75Q5 5.425 5.213 5.213Q5.425 5 5.75 5H9.65Q9.8 5 9.9 5.1Q10 5.2 10 5.35Q10 5.5 9.9 5.6Q9.8 5.7 9.65 5.7H5.7V9.65Q5.7 9.8 5.6 9.9Q5.5 10 5.35 10ZM14.35 19Q14.2 19 14.1 18.9Q14 18.8 14 18.65Q14 18.5 14.1 18.4Q14.2 18.3 14.35 18.3H18.3V14.35Q18.3 14.2 18.4 14.1Q18.5 14 18.65 14Q18.8 14 18.9 14.1Q19 14.2 19 14.35V18.25Q19 18.575 18.788 18.788Q18.575 19 18.25 19ZM18.65 10Q18.5 10 18.4 9.9Q18.3 9.8 18.3 9.65V5.7H14.35Q14.2 5.7 14.1 5.6Q14 5.5 14 5.35Q14 5.2 14.1 5.1Q14.2 5 14.35 5H18.25Q18.575 5 18.788 5.213Q19 5.425 19 5.75V9.65Q19 9.8 18.9 9.9Q18.8 10 18.65 10Z"/>
    </Icon>
  );
});

IconMaterialFullscreenRoundedW100.displayName = 'AmauiIconMaterialFullscreenRoundedW100';

export default IconMaterialFullscreenRoundedW100;
