import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditW100Filled'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.7V4.3h1.5L6.15 7h3L7.8 4.3h2L11.15 7h3L12.8 4.3h2L16.15 7h3L17.8 4.3h2.9v5.025H20V7.7H4V17h8.625v.7Zm15.525-4.35 1 1-4.35 4.325h-1v-1Zm1.475.5-.975-1 1.35-1.35.975 1Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100Filled.displayName = 'AmauiIconMaterialMovieEditW100Filled';

export default IconMaterialMovieEditW100Filled;
