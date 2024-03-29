import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataExplorationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationFilled'

      short_name='DataExploration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 20.5q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288ZM12 22q-2.8 0-4.937-1.3-2.138-1.3-3.338-3.1l4.4-4.4L11.4 16l4.6-4.575V13h2V8h-5v2h1.575L11.3 13.275 8 10.5l-5.275 5.275q-.35-.9-.537-1.863Q2 12.95 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v10Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationFilled.displayName = 'AmauiIconMaterialDataExplorationFilled';

export default IconMaterialDataExplorationFilled;
