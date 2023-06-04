import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoDev = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDev'

      short_name='LogoDev'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h2.4q.575 0 .862-.288.288-.287.288-.862v-3.7q0-.575-.288-.863Q8.975 9 8.4 9H6Zm4.125 0h3.2v-1.15h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-3.2Zm5.225-.025h1.35L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2Zm-8.2-1.125v-3.7H8.4v3.7ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLogoDev.displayName = 'AmauiIconMaterialLogoDev';

export default IconMaterialLogoDev;
