import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardW100Filled'

      short_name='ArrowDownward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-.125 0-.262-.05-.138-.05-.263-.175L5.25 12.25q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l5.9 5.9V5.35q0-.15.1-.25T12 5q.15 0 .25.1t.1.25v12.3l5.9-5.9q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-6.225 6.225q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardW100Filled.displayName = 'AmauiIconMaterialArrowDownwardW100Filled';

export default IconMaterialArrowDownwardW100Filled;
