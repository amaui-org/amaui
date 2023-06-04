import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatInkHighlighterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100'

      short_name='FormatInkHighlighter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.725 17.775 2.35-2.35-.2-.2q-.45-.45-.45-1.05 0-.6.45-1.05L15.95 4.05Q16.4 3.6 17 3.6q.6 0 1.05.45l1.5 1.5Q20 6 20 6.6q0 .6-.45 1.05l-9.075 9.075q-.45.45-1.05.45-.6 0-1.05-.45l-.25-.25-1.3 1.3Zm9.15-8.05Zm1.3 1.3-2.6-2.6-5.2 5.2q-.225.225-.225.55 0 .325.225.55l1.5 1.5q.225.225.55.225.325 0 .55-.225ZM2 24v-1.4h20V24Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100.displayName = 'AmauiIconMaterialFormatInkHighlighterW100';

export default IconMaterialFormatInkHighlighterW100;
