import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumberedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedW100Filled'

      short_name='FormatListNumbered'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.75 19.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.4v-.8h-.65q-.15 0-.25-.1T4.4 18q0-.15.1-.25t.25-.1h.65v-.8H3.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1Zm1-12q-.15 0-.25-.1t-.1-.25V4.85h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1Zm-1 6q-.15 0-.25-.1t-.1-.25v-.225l.075-.225 1.775-2.2h-1.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25v.225l-.075.225-1.775 2.2h1.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.5 4.5q-.15 0-.25-.1T8.9 18q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1T8.9 12q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1T8.9 6q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedW100Filled.displayName = 'AmauiIconMaterialFormatListNumberedW100Filled';

export default IconMaterialFormatListNumberedW100Filled;
