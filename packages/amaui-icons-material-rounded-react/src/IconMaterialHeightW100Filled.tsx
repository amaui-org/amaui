import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightW100Filled'

      short_name='Height'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.8q-.15 0-.275-.05-.125-.05-.25-.175L9.15 17.25q-.125-.125-.125-.262 0-.138.125-.263.1-.125.25-.125t.275.125L11.65 18.7V5.3l-2 2q-.1.1-.237.1-.138 0-.263-.125-.1-.125-.1-.275 0-.15.125-.275l2.3-2.3q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L14.85 6.75q.125.125.125.262 0 .138-.125.263-.1.125-.25.125t-.275-.125L12.35 5.3v13.4l2-2q.1-.1.238-.1.137 0 .262.125.1.125.1.275 0 .15-.125.275l-2.3 2.3q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialHeightW100Filled.displayName = 'AmauiIconMaterialHeightW100Filled';

export default IconMaterialHeightW100Filled;
