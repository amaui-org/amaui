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
      <path d="M4.8 5.3 6.15 8h3L7.8 5.3h2L11.15 8h3L12.8 5.3h2L16.15 8h3L17.8 5.3h1.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3Z"/>
    </Icon>
  );
});

IconMaterialMovieW100Filled.displayName = 'AmauiIconMaterialMovieW100Filled';

export default IconMaterialMovieW100Filled;
