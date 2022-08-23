import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharpW100Filled'
      short_name='Movie'

      {...props}
    >
      <path d="M3.3 18.7V5.3H4.8L6.15 8H9.15L7.8 5.3H9.8L11.15 8H14.15L12.8 5.3H14.8L16.15 8H19.15L17.8 5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialMovieSharpW100Filled.displayName = 'AmauiIconMaterialMovieSharpW100Filled';

export default IconMaterialMovieSharpW100Filled;
