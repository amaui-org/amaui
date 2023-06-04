import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecyclingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingW100'

      short_name='Recycling'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.75 9.85 1.8-2.925-1.2-1.975q-.225-.375-.687-.375-.463 0-.688.375l-1.95 3.275Zm7.75 5.45-1.775-2.95 2.775-1.6 1.275 2.125q.2.35.238.775.037.425-.163.775-.2.4-.6.637-.4.238-.85.238Zm-2.3 5.6L12 17.7l3.2-3.2v1.6H19l-1.15 2.325q-.225.4-.612.637-.388.238-.838.238h-1.2Zm-7.75-1.6q-.375 0-.712-.2-.338-.2-.488-.55-.15-.325-.15-.675 0-.35.175-.65L6.95 16.1h3.45v3.2Zm-1.975-2.275-1.3-2.6q-.2-.35-.175-.775.025-.425.25-.775l.3-.525-1.35-.825 4.375-1.1 1.1 4.4-1.375-.85Zm10.8-6.85-4.375-1.1 1.375-.825-2.5-4.15H13.6q.425 0 .787.212.363.213.588.563l1.05 1.75 1.35-.85Z"/>
    </Icon>
  );
});

IconMaterialRecyclingW100.displayName = 'AmauiIconMaterialRecyclingW100';

export default IconMaterialRecyclingW100;
