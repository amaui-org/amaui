import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckW100Filled'

      short_name='FactCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 8.35h3q.15 0 .25-.1t.1-.25q0-.15-.1-.25T9 7.65H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4h3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4h3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm8.55-2.575q.15 0 .275-.05.125-.05.25-.175l3.25-3.25q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-3.275 3.3-1.175-1.175q-.1-.1-.25-.113-.15-.012-.25.088-.1.125-.1.275 0 .15.1.25l1.15 1.125q.125.125.25.175.125.05.275.05ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFactCheckW100Filled.displayName = 'AmauiIconMaterialFactCheckW100Filled';

export default IconMaterialFactCheckW100Filled;
