import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberDvr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvr'

      short_name='FiberDvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.75 15q.325 0 .538-.213.212-.212.212-.537V13h1.15l.675 1.575q.075.2.25.312.175.113.375.113.375 0 .588-.3.212-.3.062-.65l-.5-1.15q.375-.2.638-.575Q20 11.95 20 11.5v-1q0-.65-.425-1.075Q19.15 9 18.5 9h-3q-.2 0-.35.15-.15.15-.15.35v4.75q0 .325.213.537.212.213.537.213Zm.75-3.5v-1h2v1ZM11.85 15q.3 0 .575-.213.275-.212.375-.512l1.275-4.35q.1-.35-.112-.638Q13.75 9 13.4 9q-.25 0-.437.15-.188.15-.263.375l-.85 2.925L11 9.525q-.075-.225-.262-.375Q10.55 9 10.3 9q-.35 0-.562.287-.213.288-.113.638l1.275 4.35q.1.3.375.512.275.213.575.213ZM4.5 15h3q.65 0 1.075-.425Q9 14.15 9 13.5v-3q0-.65-.425-1.075Q8.15 9 7.5 9h-3q-.2 0-.35.15Q4 9.3 4 9.5v5q0 .2.15.35.15.15.35.15Zm1-1.5v-3h2v3ZM3 20q-.825 0-1.412-.587Q1 18.825 1 18V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v12q0 .825-.587 1.413Q21.825 20 21 20Zm0-2V6v12Zm0 0h18V6H3v12Z"/>
    </Icon>
  );
});

IconMaterialFiberDvr.displayName = 'AmauiIconMaterialFiberDvr';

export default IconMaterialFiberDvr;
