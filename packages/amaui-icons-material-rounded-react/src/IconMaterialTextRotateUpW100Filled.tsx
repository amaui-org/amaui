import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpW100Filled'

      short_name='TextRotateUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.25 19.05q-.15 0-.25-.1t-.1-.25V4.95L16.45 6.4q-.1.1-.238.112-.137.013-.262-.112t-.125-.25q0-.125.125-.25l1.775-1.775q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L20.55 5.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125L18.6 4.95V18.7q0 .15-.1.25t-.25.1Zm-4.95-3.375-9.275-3.55q-.125-.05-.225-.187-.1-.138-.1-.288 0-.15.1-.287.1-.138.225-.188l9.275-3.45q.2-.075.35.025.15.1.15.325 0 .1-.05.175-.05.075-.15.125l-2.65.975v4.7l2.65.975q.1.05.15.125.05.075.05.175 0 .225-.15.325t-.35.025Zm-3-1.875V9.6l-5.5 2v.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpW100Filled.displayName = 'AmauiIconMaterialTextRotateUpW100Filled';

export default IconMaterialTextRotateUpW100Filled;
