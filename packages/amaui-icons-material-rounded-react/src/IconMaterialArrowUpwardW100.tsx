import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardW100'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.15 0-.25-.1t-.1-.25V6.35l-5.9 5.9q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l6.225-6.225q.125-.125.263-.175.137-.05.262-.05.15 0 .275.05.125.05.25.175l6.225 6.225q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-5.9-5.9v12.3q0 .15-.1.25T12 19Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardW100.displayName = 'AmauiIconMaterialArrowUpwardW100';

export default IconMaterialArrowUpwardW100;
