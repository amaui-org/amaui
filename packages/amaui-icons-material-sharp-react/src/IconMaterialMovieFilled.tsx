import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilled'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h2l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h5v16Z"/>
    </Icon>
  );
});

IconMaterialMovieFilled.displayName = 'AmauiIconMaterialMovieFilled';

export default IconMaterialMovieFilled;
