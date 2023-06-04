import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatOverlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverlineW100Filled'

      short_name='FormatOverline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 4.35q-.15 0-.25-.1T5.9 4q0-.15.1-.25t.25-.1h11.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 20.1q-2.55 0-4.325-1.775Q5.9 16.55 5.9 14q0-2.55 1.775-4.325Q9.45 7.9 12 7.9q2.55 0 4.325 1.775Q18.1 11.45 18.1 14q0 2.55-1.775 4.325Q14.55 20.1 12 20.1Zm0-.7q2.275 0 3.838-1.563Q17.4 16.275 17.4 14q0-2.275-1.562-3.838Q14.275 8.6 12 8.6q-2.275 0-3.837 1.562Q6.6 11.725 6.6 14q0 2.275 1.563 3.837Q9.725 19.4 12 19.4Z"/>
    </Icon>
  );
});

IconMaterialFormatOverlineW100Filled.displayName = 'AmauiIconMaterialFormatOverlineW100Filled';

export default IconMaterialFormatOverlineW100Filled;
