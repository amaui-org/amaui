import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditFilled'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19V3h2l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h5v6H4v8h8v2Zm17.15-6.3 2.15 2.1-5.175 5.2H14v-2.125Zm2.875 1.4L19.9 11.975l1.425-1.425 2.1 2.15Z"/>
    </Icon>
  );
});

IconMaterialMovieEditFilled.displayName = 'AmauiIconMaterialMovieEditFilled';

export default IconMaterialMovieEditFilled;
