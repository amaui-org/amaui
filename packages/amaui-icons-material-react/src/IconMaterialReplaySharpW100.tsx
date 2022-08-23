import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaySharpW100'
      short_name='Replay'

      {...props}
    >
      <path d="M12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13H5Q5 15.925 7.038 17.962Q9.075 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6H11.55L13.2 7.65L12.7 8.15L10.2 5.625L12.75 3.1L13.25 3.6L11.55 5.3H12Q13.6 5.3 15 5.9Q16.4 6.5 17.45 7.55Q18.5 8.6 19.1 10Q19.7 11.4 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialReplaySharpW100.displayName = 'AmauiIconMaterialReplaySharpW100';

export default IconMaterialReplaySharpW100;
