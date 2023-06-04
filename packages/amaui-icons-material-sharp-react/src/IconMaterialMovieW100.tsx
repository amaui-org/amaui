import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieW100'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h1.5L6.15 8h3L7.8 5.3h2L11.15 8h3L12.8 5.3h2L16.15 8h3L17.8 5.3h2.9v13.4Zm.7-10V18h16V8.7Zm0 0V18Z"/>
    </Icon>
  );
});

IconMaterialMovieW100.displayName = 'AmauiIconMaterialMovieW100';

export default IconMaterialMovieW100;
