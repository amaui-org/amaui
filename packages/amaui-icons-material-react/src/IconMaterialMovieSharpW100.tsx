import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharpW100'
      short_name='Movie'

      {...props}
    >
      <path d="M3.3 18.7V5.3H4.8L6.15 8H9.15L7.8 5.3H9.8L11.15 8H14.15L12.8 5.3H14.8L16.15 8H19.15L17.8 5.3H20.7V18.7ZM4 8.7V18H20V8.7ZM4 8.7V18Z"/>
    </Icon>
  );
});

IconMaterialMovieSharpW100.displayName = 'AmauiIconMaterialMovieSharpW100';

export default IconMaterialMovieSharpW100;
