import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForward'

      short_name='ArrowForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
    </Icon>
  );
});

IconMaterialArrowForward.displayName = 'AmauiIconMaterialArrowForward';

export default IconMaterialArrowForward;
