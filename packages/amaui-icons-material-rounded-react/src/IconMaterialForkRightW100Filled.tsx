import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRightW100Filled'

      short_name='ForkRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20.35q-.15 0-.25-.1t-.1-.25V5.275l-2 2q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25L9.475 4.45q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.325 2.325q.125.125.125.25t-.125.25q-.125.1-.25.112-.125.013-.25-.112l-2-2v9.875q.8-1.35 2.013-2.025 1.212-.675 2.737-.675.725 0 1.375.05t1.25.15l-2-2q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.325 2.325q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2-2q-.6-.1-1.287-.162-.688-.063-1.338-.063-1.55 0-2.887.937Q10.875 15 10.35 16.9V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialForkRightW100Filled.displayName = 'AmauiIconMaterialForkRightW100Filled';

export default IconMaterialForkRightW100Filled;
