import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHexagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hexagon'

      short_name='Hexagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon opacity=".3" points="16.05,19 7.95,19 3.91,12 7.95,5 16.05,5 20.09,12"/><path d="M17.2,3H6.8l-5.2,9l5.2,9h10.4l5.2-9L17.2,3z M16.05,19H7.95l-4.04-7l4.04-7h8.09l4.04,7L16.05,19z"/></g>
    </Icon>
  );
});

IconMaterialHexagon.displayName = 'AmauiIconMaterialHexagon';

export default IconMaterialHexagon;
