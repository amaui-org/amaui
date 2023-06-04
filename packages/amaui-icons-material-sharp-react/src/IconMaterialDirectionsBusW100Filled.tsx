import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusW100Filled'

      short_name='DirectionsBus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19.7v-2.2q-.5-.125-1.1-.837-.6-.713-.6-1.663V6q0-1.4 1.613-2.05Q8.525 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 .95-.6 1.663-.6.712-1.1.837v2.2h-.7v-2H7.7v2Zm-1-8.4h12V6.4H6Zm2.5 4.2q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 13.5 8.5 13.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm7 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusW100Filled.displayName = 'AmauiIconMaterialDirectionsBusW100Filled';

export default IconMaterialDirectionsBusW100Filled;
