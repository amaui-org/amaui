import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatInkHighlighterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100Filled'

      short_name='FormatInkHighlighter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-1.4h20V24Zm2.725-6.225 2.35-2.35-.2-.2q-.45-.45-.45-1.05 0-.6.45-1.05l4.2-4.2 3.6 3.6-4.2 4.2q-.45.45-1.05.45-.6 0-1.05-.45l-.25-.25-1.3 1.3Zm10.45-5.75-3.6-3.6L15.95 4.05Q16.4 3.6 17 3.6q.6 0 1.05.45l1.5 1.5Q20 6 20 6.6q0 .6-.45 1.05Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100Filled.displayName = 'AmauiIconMaterialFormatInkHighlighterW100Filled';

export default IconMaterialFormatInkHighlighterW100Filled;
