import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkW100'

      short_name='Link'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 15.8H7q-1.575 0-2.688-1.112Q3.2 13.575 3.2 12q0-1.575 1.112-2.688Q5.425 8.2 7 8.2h3.5v.7H7q-1.275 0-2.188.912Q3.9 10.725 3.9 12q0 1.275.912 2.188.913.912 2.188.912h3.5Zm-1.85-3.45v-.7h6.7v.7Zm4.85 3.45v-.7H17q1.275 0 2.188-.912.912-.913.912-2.188 0-1.275-.912-2.188Q18.275 8.9 17 8.9h-3.5v-.7H17q1.575 0 2.688 1.112Q20.8 10.425 20.8 12q0 1.575-1.112 2.688Q18.575 15.8 17 15.8Z"/>
    </Icon>
  );
});

IconMaterialLinkW100.displayName = 'AmauiIconMaterialLinkW100';

export default IconMaterialLinkW100;
