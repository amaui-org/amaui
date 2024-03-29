import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScubaDiving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDiving'

      short_name='ScubaDiving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15q-.825 0-1.412-.588Q1 13.825 1 13t.588-1.413Q2.175 11 3 11t1.412.587Q5 12.175 5 13q0 .825-.588 1.412Q3.825 15 3 15Zm5.9-4.9q-.6.175-1.137-.138-.538-.312-.713-.912-.175-.6.138-1.15.312-.55.912-.7l3.575-.95q.4-.125.75.1t.475.625l.275.95q.125.4-.1.75t-.625.475ZM3.2 22.4q-.35-.25-.4-.65-.05-.4.2-.75l2.25-3 .775-4.45q.075-.6.475-1.063.4-.462 1.025-.612L17 9l2-4 2.5-2.5q.2-.2.488-.213.287-.012.537.238.2.2.225.487.025.288-.175.488L20.5 5.9l-1.3 3.975q-.1.3-.287.55-.188.25-.463.45l-4.2 2.95q-.125.1-.262.162-.138.063-.288.113l-5.55 1.75L7 19l-2.4 3.2q-.25.35-.65.4-.4.05-.75-.2Z"/>
    </Icon>
  );
});

IconMaterialScubaDiving.displayName = 'AmauiIconMaterialScubaDiving';

export default IconMaterialScubaDiving;
