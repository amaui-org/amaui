import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorResetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetW100Filled'

      short_name='FormatColorReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.2 15.7 9.1 6.65 12 3.8l4.75 4.65q.875.825 1.413 2.137.537 1.313.537 2.563 0 .6-.113 1.237-.112.638-.387 1.313Zm1.7 5.2-3.15-3.15q-.825.9-2.112 1.425Q13.35 19.7 12 19.7q-2.8 0-4.75-1.912Q5.3 15.875 5.3 13.15q0-1.425.588-2.662Q6.475 9.25 7.35 8.35l-4.1-4.1.5-.5L20.4 20.4Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100Filled.displayName = 'AmauiIconMaterialFormatColorResetW100Filled';

export default IconMaterialFormatColorResetW100Filled;
