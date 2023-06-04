import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpW100Filled'

      short_name='Mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 14.6q.15 0 .25-.1t.1-.25V13.1h2.3q.3 0 .5-.2t.2-.5v-2.3q0-.3-.2-.5t-.5-.2h-2.25q-.325 0-.537.212-.213.213-.213.538v4.1q0 .15.1.25t.25.1Zm.35-2.2v-2.3h2.3v2.3Zm-7.85 2.2q.15 0 .25-.1t.1-.25V10.1h1.8v2.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V10.1h1.8v4.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V10.1q0-.3-.2-.5t-.5-.2H7.1q-.3 0-.5.2t-.2.5v4.15q0 .15.1.25t.25.1Zm-.95 5.1q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMpW100Filled.displayName = 'AmauiIconMaterialMpW100Filled';

export default IconMaterialMpW100Filled;
