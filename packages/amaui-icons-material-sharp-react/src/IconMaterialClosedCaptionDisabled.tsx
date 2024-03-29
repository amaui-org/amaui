import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.875 4H21v14.125l-2-2V6H8.875ZM18 13v2h-.125l-1.5-1.5h.125V13Zm-1.5-2v-.5h-2v1.125l-1.5-1.5V9h5v2Zm-2.55.05ZM10.1 12.9ZM9.025 9l1.5 1.5H7.5v3h2V13H11v2H6V9ZM4.2 4.175 6.025 6H5v12h10.175L.675 3.5 2.1 2.075l19.8 19.8-1.425 1.425-3.3-3.3H3V4.175Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabled.displayName = 'AmauiIconMaterialClosedCaptionDisabled';

export default IconMaterialClosedCaptionDisabled;
