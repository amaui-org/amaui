import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100Filled'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-8.95-8.95v-1l5.35 5.35v2h-1.5q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H9.2q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H6.3V7.3h1l.275.275v1L2.25 3.25l.5-.5L21.8 21.8Zm-8.95-8.95-.7-.7v4.7h.7ZM9.1 10.1l-.7-.7v7.95h.7Zm1.6-2.8h2.95V4.75H10.7Zm7 7.6-2.1-2.1V9.65h-.7v2.45l-2.55-2.45L10 7.3V4.05h4.35V7.3h3.35Zm-2.8.7v1.75h.7V15.6Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100Filled.displayName = 'AmauiIconMaterialNoLuggageW100Filled';

export default IconMaterialNoLuggageW100Filled;
