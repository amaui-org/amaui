import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieFilterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterW100Filled'

      short_name='MovieFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 11.3-.65 1.4-1.4.65 1.4.65.65 1.4.65-1.4 1.4-.65-1.4-.65Zm6-.5-.5 1.05-1.05.5 1.05.5.5 1.05.5-1.05 1.05-.5-1.05-.5ZM3.3 18.7V5.3h1.5L6.15 8h3L7.8 5.3h2L11.15 8h3L12.8 5.3h2L16.15 8h3L17.8 5.3h2.9v13.4Z"/>
    </Icon>
  );
});

IconMaterialMovieFilterW100Filled.displayName = 'AmauiIconMaterialMovieFilterW100Filled';

export default IconMaterialMovieFilterW100Filled;
