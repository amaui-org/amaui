import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledW100'

      short_name='UpdateDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 19.7q-1.6 0-3-.6t-2.45-1.65Q5.525 16.4 4.925 15q-.6-1.4-.6-3 0-1.425.475-2.663Q5.275 8.1 6.1 7.1L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2.65-2.65q-1.025.825-2.275 1.287-1.25.463-2.65.463Zm0-.7q1.25 0 2.375-.425t2.025-1.15l-9.85-9.85Q5.85 8.5 5.438 9.613 5.025 10.725 5.025 12q0 2.925 2.037 4.962Q9.1 19 12.025 19Zm0-14q-.925 0-1.775.213-.85.212-1.6.637l-.5-.5q.85-.5 1.825-.775t2.05-.275q1.625 0 3.1.662 1.475.663 2.6 1.838V4.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .325-.213.537Q18 8 17.675 8h-2.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.05q-1.05-1.075-2.375-1.688Q13.525 5 12.025 5Zm.35 4.575-.7-.7V7.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm6.3 6.3-.525-.525q.275-.475.463-.963.187-.487.312-1.012.05-.15.15-.25.1-.1.25-.05t.225.187q.075.138.025.288-.125.625-.35 1.187-.225.563-.55 1.138Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledW100.displayName = 'AmauiIconMaterialUpdateDisabledW100';

export default IconMaterialUpdateDisabledW100;
