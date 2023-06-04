import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumbered = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumbered'

      short_name='FormatListNumbered'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-1h2v-.5H4v-1h1V17H3v-1h3v4Zm5-1v-2h13v2Zm-5-5v-.9L4.8 11H3v-1h3v.9L4.2 13H6v1Zm5-1v-2h13v2ZM4 8V5H3V4h2v4Zm4-1V5h13v2Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumbered.displayName = 'AmauiIconMaterialFormatListNumbered';

export default IconMaterialFormatListNumbered;
