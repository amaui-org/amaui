import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipW100Filled'

      short_name='Sip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.6q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25T12 9.4q-.15 0-.25.1t-.1.25v4.5q0 .15.1.25t.25.1Zm2.75 0q.15 0 .25-.1t.1-.25V12.6h2.8q.3 0 .5-.2t.2-.5v-1.8q0-.3-.2-.5t-.5-.2h-2.75q-.325 0-.537.212-.213.213-.213.538v4.1q0 .15.1.25t.25.1Zm.35-2.7v-1.8h2.8v1.8Zm-9.35 2.7H8.9q.3 0 .5-.2t.2-.5v-1.55q0-.3-.2-.5t-.5-.2H6.1V10.1h3.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H6.1q-.3 0-.5.2t-.2.5v1.55q0 .3.2.5t.5.2h2.8v1.55H5.75q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-.95 4.1q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSipW100Filled.displayName = 'AmauiIconMaterialSipW100Filled';

export default IconMaterialSipW100Filled;
