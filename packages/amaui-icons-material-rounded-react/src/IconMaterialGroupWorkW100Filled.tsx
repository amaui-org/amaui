import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupWorkW100Filled'

      short_name='GroupWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.45 15.25q.575 0 .963-.387.387-.388.387-.963t-.387-.962q-.388-.388-.963-.388t-.962.388q-.388.387-.388.962t.388.963q.387.387.962.387Zm7.1 0q.575 0 .963-.387.387-.388.387-.963t-.387-.962q-.388-.388-.963-.388t-.962.388q-.388.387-.388.962t.388.963q.387.387.962.387ZM12 9.5q.575 0 .963-.387.387-.388.387-.963t-.387-.962Q12.575 6.8 12 6.8t-.962.388q-.388.387-.388.962t.388.963q.387.387.962.387Zm0 11.2q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialGroupWorkW100Filled.displayName = 'AmauiIconMaterialGroupWorkW100Filled';

export default IconMaterialGroupWorkW100Filled;
