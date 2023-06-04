import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrapTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextW100Filled'

      short_name='WrapText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.25q1.275 0 2.188.912.912.913.912 2.188 0 1.275-.912 2.188-.913.912-2.188.912h-4l1.725 1.725q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2.025-2.025q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l2.05-2.05q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-1.7 1.7h4q1 0 1.7-.7t.7-1.7q0-1-.7-1.7t-1.7-.7Zm0-5.5q-.15 0-.25-.1T4.65 6q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 11q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialWrapTextW100Filled.displayName = 'AmauiIconMaterialWrapTextW100Filled';

export default IconMaterialWrapTextW100Filled;
