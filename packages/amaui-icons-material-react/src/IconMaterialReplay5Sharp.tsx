import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplay5Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5Sharp'
      short_name='Replay5'

      {...props}
    >
      <path d="M9.5 16V14.5H12.5V13.5H9.5V10H14V11.5H11V12.5H14V16ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13H5Q5 15.925 7.038 17.962Q9.075 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6H11.85L13.4 7.55L12 9L8 5L12 1L13.4 2.45L11.85 4H12Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplay5Sharp.displayName = 'AmauiIconMaterialReplay5Sharp';

export default IconMaterialReplay5Sharp;
