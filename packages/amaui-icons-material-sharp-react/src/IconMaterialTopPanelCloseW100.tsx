import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M363 709h234L480 591 363 709ZM200 416h560V296H200v120Zm0 440h560V444H200v412Zm0-440V296v120Zm-28 468V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100.displayName = 'AmauiIconMaterialTopPanelCloseW100';

export default IconMaterialTopPanelCloseW100;
