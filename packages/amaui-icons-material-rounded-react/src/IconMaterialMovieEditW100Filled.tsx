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
      <path d="M4.8 17.7q-.65 0-1.075-.425Q3.3 16.85 3.3 16.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3L6.15 7h3L7.8 4.3h2L11.15 7h3L12.8 4.3h2L16.15 7h3L17.8 4.3h1.4q.65 0 1.075.425.425.425.425 1.075v3.525H20V7.7H4v8.5q0 .35.225.575Q4.45 17 4.8 17h7.825v.7Zm14.025-4.35 1 1-4.125 4.1q-.125.125-.25.175-.125.05-.275.05h-.325q-.15 0-.262-.113-.113-.112-.113-.262v-.325q0-.15.05-.275.05-.125.175-.25Zm1.475.5-.975-1 .8-.8q.225-.225.525-.238.3-.012.5.188t.188.512q-.013.313-.238.538Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100Filled.displayName = 'AmauiIconMaterialMovieEditW100Filled';

export default IconMaterialMovieEditW100Filled;
