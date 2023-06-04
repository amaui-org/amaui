import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPixel33xl3a = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pixel33xl3a'

      short_name='Pixel33xl3a'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 336q17 0 28.5-11.5T400 296q0-17-11.5-28.5T360 256q-17 0-28.5 11.5T320 296q0 17 11.5 28.5T360 336Zm-160 680V136h560v880H200Zm80-80h400V216H280v720Zm0 0V216v720Z"/>
    </Icon>
  );
});

IconMaterialPixel33xl3a.displayName = 'AmauiIconMaterialPixel33xl3a';

export default IconMaterialPixel33xl3a;
