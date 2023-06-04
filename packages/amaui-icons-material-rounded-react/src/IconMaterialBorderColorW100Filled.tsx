import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorW100Filled'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 24q-.3 0-.5-.2t-.2-.5q0-.275.213-.488.212-.212.487-.212h18.6q.3 0 .5.2t.2.5q0 .275-.212.488-.213.212-.488.212Zm3.35-4.7q-.325 0-.537-.213-.213-.212-.213-.537v-.9q0-.15.05-.275.05-.125.175-.25L14.05 8.65l1.9 1.9-8.475 8.525q-.125.125-.25.175-.125.05-.275.05Zm10.725-9.7-1.9-1.85.95-.95q.275-.275.675-.275t.675.275l.5.5q.275.275.3.675.025.4-.25.675Z"/>
    </Icon>
  );
});

IconMaterialBorderColorW100Filled.displayName = 'AmauiIconMaterialBorderColorW100Filled';

export default IconMaterialBorderColorW100Filled;
