import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharp'
      short_name='Movie'

      {...props}
    >
      <path d="M2 20V4H4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H22V20ZM4 10V18H20V10ZM4 10V18Z"/>
    </Icon>
  );
});

IconMaterialMovieSharp.displayName = 'AmauiIconMaterialMovieSharp';

export default IconMaterialMovieSharp;
