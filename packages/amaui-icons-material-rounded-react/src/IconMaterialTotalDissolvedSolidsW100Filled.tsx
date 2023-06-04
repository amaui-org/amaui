import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTotalDissolvedSolidsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsW100Filled'

      short_name='TotalDissolvedSolids'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 11.8q.725-2.125 2.475-4.125t3.375-3.5q.2-.2.5-.2t.5.2q1.625 1.5 3.375 3.5T18.35 11.8Zm13.05 2.025q0 .275-.025.55t-.075.55l-5.75 5.725q-.275.05-.538.062-.262.013-.537-.012Zm-4.475-.025h1.025L9 20.025q-.175-.075-.337-.163-.163-.087-.313-.212Zm-4.475 0h1.025L6.6 17.975q-.125-.15-.212-.3-.088-.15-.188-.325Zm-4.45 0h1.025l-.975.975q-.05-.25-.05-.488V13.8Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsW100Filled.displayName = 'AmauiIconMaterialTotalDissolvedSolidsW100Filled';

export default IconMaterialTotalDissolvedSolidsW100Filled;
