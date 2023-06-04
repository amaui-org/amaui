import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovie = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Movie'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h2l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h5v16Zm2-10v8h16v-8Zm0 0v8Z"/>
    </Icon>
  );
});

IconMaterialMovie.displayName = 'AmauiIconMaterialMovie';

export default IconMaterialMovie;
