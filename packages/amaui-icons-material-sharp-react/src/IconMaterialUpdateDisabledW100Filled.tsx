import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledW100Filled'

      short_name='UpdateDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.85 20.85-2.9-2.9q-1.025.825-2.275 1.287-1.25.463-2.65.463-1.6 0-3-.6t-2.45-1.65Q5.525 16.4 4.925 15q-.6-1.4-.6-3 0-1.425.475-2.663Q5.275 8.1 6.1 7.1L3.15 4.15l.5-.5 16.7 16.7ZM12.025 19q1.25 0 2.375-.425t2.025-1.15l-9.85-9.85Q5.85 8.5 5.438 9.613 5.025 10.725 5.025 12q0 2.925 2.037 4.962Q9.1 19 12.025 19Zm2.8-11v-.7h2.4q-1.05-1.075-2.375-1.688Q13.525 5 12.025 5q-.925 0-1.775.213-.85.212-1.6.637l-.5-.5q.85-.5 1.825-.775t2.05-.275q1.625 0 3.1.662 1.475.663 2.6 1.838V4.4h.7V8Zm-2.45 1.575-.7-.7V7h.7Zm6.3 6.3-.525-.525q.3-.55.5-1.125t.3-1.225h.7q-.1.8-.35 1.512-.25.713-.625 1.363Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledW100Filled.displayName = 'AmauiIconMaterialUpdateDisabledW100Filled';

export default IconMaterialUpdateDisabledW100Filled;
