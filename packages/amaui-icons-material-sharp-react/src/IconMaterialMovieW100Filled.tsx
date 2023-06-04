import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieW100Filled'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h1.5L6.15 8h3L7.8 5.3h2L11.15 8h3L12.8 5.3h2L16.15 8h3L17.8 5.3h2.9v13.4Z"/>
    </Icon>
  );
});

IconMaterialMovieW100Filled.displayName = 'AmauiIconMaterialMovieW100Filled';

export default IconMaterialMovieW100Filled;
