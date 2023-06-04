import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatOverline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverline'

      short_name='FormatOverline'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M19,3v2H5V3H19z M12,7c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7s7-3.13,7-7C19,10.13,15.87,7,12,7z M12,18.5 c-2.49,0-4.5-2.01-4.5-4.5S9.51,9.5,12,9.5s4.5,2.01,4.5,4.5S14.49,18.5,12,18.5z"/></g>
    </Icon>
  );
});

IconMaterialFormatOverline.displayName = 'AmauiIconMaterialFormatOverline';

export default IconMaterialFormatOverline;
