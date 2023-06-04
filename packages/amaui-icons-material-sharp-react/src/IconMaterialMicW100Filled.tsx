import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicW100Filled'

      short_name='Mic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.7q-.725 0-1.212-.488Q10.3 11.725 10.3 11V5q0-.725.488-1.213Q11.275 3.3 12 3.3t1.213.487Q13.7 4.275 13.7 5v6q0 .725-.487 1.212-.488.488-1.213.488Zm-.35 7.65V16.7q-2.275-.175-3.812-1.8Q6.3 13.275 6.3 11H7q0 2.075 1.463 3.537Q9.925 16 12 16t3.538-1.463Q17 13.075 17 11h.7q0 2.275-1.537 3.9-1.538 1.625-3.813 1.8v3.65Z"/>
    </Icon>
  );
});

IconMaterialMicW100Filled.displayName = 'AmauiIconMaterialMicW100Filled';

export default IconMaterialMicW100Filled;
