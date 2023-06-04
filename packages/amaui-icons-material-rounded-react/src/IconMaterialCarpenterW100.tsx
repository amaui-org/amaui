import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterW100'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.05 21.175q-.275 0-.55-.113-.275-.112-.5-.337l-1.2-1.175q-.225-.225-.325-.5t-.1-.55q0-.275.113-.55.112-.275.312-.5l.3-.325-8.15-11.65L7 2.425l12.15 12.15q.225.225.338.512.112.288.112.563 0 .275-.112.55-.113.275-.338.5l-4.025 4.025q-.225.225-.512.337-.288.113-.563.113Zm-1.475-4.55 3.85-3.8L7 3.4 4.85 5.55Zm.95 3.6q.25.225.575.225.325 0 .55-.225l4-4q.225-.225.225-.55 0-.325-.225-.575l-1.75-1.8-4.6 4.6q-.25.25-.25.587 0 .338.25.563Zm-.95-3.6 3.85-3.8Z"/>
    </Icon>
  );
});

IconMaterialCarpenterW100.displayName = 'AmauiIconMaterialCarpenterW100';

export default IconMaterialCarpenterW100;
