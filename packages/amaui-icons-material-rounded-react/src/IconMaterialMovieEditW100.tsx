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
      <path d="M4.8 17.7q-.65 0-1.075-.425Q3.3 16.85 3.3 16.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3L6.15 7h3L7.8 4.3h2L11.15 7h3L12.8 4.3h2L16.15 7h3L17.8 4.3h1.4q.65 0 1.075.425.425.425.425 1.075v2.975H20V7.7H4v8.5q0 .35.225.575Q4.45 17 4.8 17H12v.7Zm13.75-5.125.5.475-3.85 3.85v1.05h1.05l3.85-3.85.5.5-3.825 3.825q-.125.125-.25.175-.125.05-.275.05h-1.375q-.15 0-.262-.112-.113-.113-.113-.263v-1.35q0-.15.05-.275.05-.125.175-.25ZM20.6 14.6l-2.05-2.025 1.075-1.075q.225-.2.538-.2.312 0 .512.2l1 1q.2.2.2.512 0 .313-.2.538Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100.displayName = 'AmauiIconMaterialMovieEditW100';

export default IconMaterialMovieEditW100;
