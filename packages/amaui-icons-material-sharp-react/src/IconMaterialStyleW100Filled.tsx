import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleW100Filled'

      short_name='Style'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 15.6v4.85l-1.75-1Zm4.95 6.25h-1.95V16.5Zm2.875-.9L7.275 7.3l8.875-3.225 5 13.625ZM11.225 10q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q11.65 8 11.225 8t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialStyleW100Filled.displayName = 'AmauiIconMaterialStyleW100Filled';

export default IconMaterialStyleW100Filled;
