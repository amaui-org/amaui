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
      <path d="M19.5 20.5q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288ZM12 22q-2.825 0-4.95-1.288-2.125-1.287-3.325-3.112l4.4-4.4 2.575 2.2q.15.125.325.188.175.062.375.037.175 0 .35-.075t.3-.2L16 11.425V12q0 .425.288.712.287.288.712.288t.712-.288Q18 12.425 18 12V9q0-.425-.288-.713Q17.425 8 17 8h-3q-.425 0-.712.287Q13 8.575 13 9t.288.712Q13.575 10 14 10h.575L11.3 13.275 8.7 11.1q-.15-.125-.325-.188-.175-.062-.35-.062-.2.025-.375.1-.175.075-.3.2l-4.625 4.625q-.35-.875-.537-1.825Q2 13 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v8q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationFilled.displayName = 'AmauiIconMaterialDataExplorationFilled';

export default IconMaterialDataExplorationFilled;
