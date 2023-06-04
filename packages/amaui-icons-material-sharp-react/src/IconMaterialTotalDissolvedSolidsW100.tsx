import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTotalDissolvedSolidsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsW100'

      short_name='TotalDissolvedSolids'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 11.8q.6-1.75 2.188-3.75Q9.425 6.05 12 3.7q2.575 2.35 4.163 4.35 1.587 2 2.187 3.75h-.75q-.575-1.55-1.975-3.337Q14.225 6.675 12 4.65 9.8 6.675 8.388 8.463 6.975 10.25 6.4 11.8Zm13.05 2.025q0 .275-.025.55t-.075.55l-5.75 5.725q-.275.05-.538.062-.262.013-.537-.012Zm-4.475-.025h1.025L9 20.025q-.175-.075-.337-.163-.163-.087-.313-.212Zm-4.475 0h1.025L6.6 17.975q-.125-.15-.212-.3-.088-.15-.188-.325Zm-4.45 0h1.025l-.975.975q-.05-.25-.05-.488V13.8Zm6.7-2Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsW100.displayName = 'AmauiIconMaterialTotalDissolvedSolidsW100';

export default IconMaterialTotalDissolvedSolidsW100;
