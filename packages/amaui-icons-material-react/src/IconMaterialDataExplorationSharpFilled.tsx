import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataExplorationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationSharpFilled'
      short_name='DataExploration'

      {...props}
    >
      <path d="M19.5 20.5Q19.925 20.5 20.212 20.212Q20.5 19.925 20.5 19.5Q20.5 19.075 20.212 18.788Q19.925 18.5 19.5 18.5Q19.075 18.5 18.788 18.788Q18.5 19.075 18.5 19.5Q18.5 19.925 18.788 20.212Q19.075 20.5 19.5 20.5ZM12 22Q9.2 22 7.063 20.7Q4.925 19.4 3.725 17.6L8.125 13.2L11.4 16L16 11.425V13H18V8H13V10H14.575L11.3 13.275L8 10.5L2.725 15.775Q2.375 14.875 2.188 13.912Q2 12.95 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12V22Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationSharpFilled.displayName = 'AmauiIconMaterialDataExplorationSharpFilled';

export default IconMaterialDataExplorationSharpFilled;
