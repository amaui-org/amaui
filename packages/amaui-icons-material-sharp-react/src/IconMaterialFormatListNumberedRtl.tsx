import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumberedRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedRtl'

      short_name='FormatListNumberedRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 20v-1h2v-.5h-1v-1h1V17h-2v-1h3v4ZM3 19v-2h13v2Zm15-5v-.9l1.8-2.1H18v-1h3v.9L19.2 13H21v1ZM3 13v-2h13v2Zm16-5V5h-1V4h2v4ZM3 7V5h13v2Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedRtl.displayName = 'AmauiIconMaterialFormatListNumberedRtl';

export default IconMaterialFormatListNumberedRtl;
