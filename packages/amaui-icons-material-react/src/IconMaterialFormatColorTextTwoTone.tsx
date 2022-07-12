import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorTextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextTwoTone'
      short_name='FormatColorText'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z"/></g>
    </Icon>
  )
});

export default IconMaterialFormatColorTextTwoTone;
