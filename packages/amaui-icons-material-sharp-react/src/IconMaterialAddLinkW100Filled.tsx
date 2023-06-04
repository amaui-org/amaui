import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkW100Filled'

      short_name='AddLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.225 15.8h-3.5q-1.575 0-2.687-1.112Q2.925 13.575 2.925 12q0-1.575 1.113-2.688Q5.15 8.2 6.725 8.2h3.5v.7h-3.5q-1.275 0-2.188.912-.912.913-.912 2.188 0 1.275.912 2.188.913.912 2.188.912h3.5Zm-1.85-3.45v-.7h6.7v.7Zm12.15-.35h-.7q0-1.275-.912-2.188Q18 8.9 16.725 8.9h-3.5v-.7h3.5q1.575 0 2.688 1.112 1.112 1.113 1.112 2.688Zm-3.15 7.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialAddLinkW100Filled.displayName = 'AmauiIconMaterialAddLinkW100Filled';

export default IconMaterialAddLinkW100Filled;
