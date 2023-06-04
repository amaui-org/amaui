import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditW100'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.7V4.3h1.5L6.15 7h3L7.8 4.3h2L11.15 7h3L12.8 4.3h2L16.15 7h3L17.8 4.3h2.9v4.475H20V7.7H4V17h8v.7Zm15.25-5.125.5.475-3.85 3.85v1.05h1.05l3.85-3.85.5.5-4.05 4.05H14.5v-2.025ZM20.6 14.6l-2.05-2.025 1.6-1.6 2.05 2.05Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100.displayName = 'AmauiIconMaterialMovieEditW100';

export default IconMaterialMovieEditW100;
