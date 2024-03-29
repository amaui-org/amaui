import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodW100Filled'

      short_name='Flood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 20.025V19.3q.8-.2 1.188-.562.387-.363 1.512-.363 1.25 0 1.75.5t1.575.5q1.075 0 1.575-.5t1.75-.5q1.225 0 1.763.5.537.5 1.587.5 1.075 0 1.575-.5t1.75-.5q1.125 0 1.5.363.375.362 1.175.562v.725q-.8-.15-1.275-.55-.475-.4-1.4-.4-1.05 0-1.575.5-.525.5-1.75.5t-1.762-.5q-.538-.5-1.588-.5-1.075 0-1.575.5t-1.75.5q-1.25 0-1.75-.5t-1.575-.5q-.925 0-1.4.4-.475.4-1.3.55Zm6.025-3.175q-1.2 0-1.737-.5-.538-.5-1.588-.5-.875 0-1.387.4-.513.4-1.313.55v-.725q.8-.2 1.188-.563.387-.362 1.512-.362.525 0 .975.137.45.138 1.25.613l-1.6-6.05L4.4 11.8l-.55-.425 6.325-7.825 9.4 3.6-.25.65L17 6.9l2.2 8.275q.575.025 1.075.387.5.363 1.075.513v.7q-.8-.15-1.275-.537-.475-.388-1.4-.388-1.075 0-1.575.5t-1.75.5q-1.225 0-1.762-.5-.538-.5-1.588-.5-1.075 0-1.575.5t-1.75.5Zm2.6-1.625q.175-.05.35-.063.175-.012.375-.012 1.275 0 1.9.55t1.725.425l-1.575-5.95-3.875 1.025Z"/>
    </Icon>
  );
});

IconMaterialFloodW100Filled.displayName = 'AmauiIconMaterialFloodW100Filled';

export default IconMaterialFloodW100Filled;
