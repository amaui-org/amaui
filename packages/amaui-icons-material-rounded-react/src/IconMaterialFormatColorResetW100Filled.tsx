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
      <path d="M18.2 15.7 9.1 6.65l2.375-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L16.75 8.45q.875.825 1.413 2.137.537 1.313.537 2.563 0 .6-.113 1.237-.112.638-.387 1.313Zm1.45 4.95-2.9-2.9q-.825.9-2.112 1.425Q13.35 19.7 12 19.7q-2.8 0-4.75-1.912Q5.3 15.875 5.3 13.15q0-1.425.588-2.662Q6.475 9.25 7.35 8.35L3.5 4.5q-.1-.1-.112-.238Q3.375 4.125 3.5 4t.25-.125q.125 0 .25.125l16.15 16.15q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100Filled.displayName = 'AmauiIconMaterialFormatColorResetW100Filled';

export default IconMaterialFormatColorResetW100Filled;
