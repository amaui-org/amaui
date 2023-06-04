import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEdit'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19V3h2l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h5v6H4v8h8v2Zm16.3-6.475 1.075 1.075-3.875 3.85v1.05h1.05l3.875-3.85 1.05 1.05-4.3 4.3H14v-3.175Zm3.175 3.175L18.3 12.525l2.15-2.15 3.175 3.175Z"/>
    </Icon>
  );
});

IconMaterialMovieEdit.displayName = 'AmauiIconMaterialMovieEdit';

export default IconMaterialMovieEdit;
