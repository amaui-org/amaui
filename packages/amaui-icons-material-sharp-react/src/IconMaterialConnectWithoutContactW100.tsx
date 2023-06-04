import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectWithoutContactW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectWithoutContactW100'

      short_name='ConnectWithoutContact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 13.35q0-2.65 1.85-4.488 1.85-1.837 4.5-1.837v.7q-2.35 0-4 1.637Q10.7 11 10.7 13.35Zm2.7 0q0-1.525 1.063-2.588Q14.825 9.7 16.35 9.7v.7q-1.225 0-2.088.862-.862.863-.862 2.088ZM5.65 6q-.575 0-.962-.388Q4.3 5.225 4.3 4.65t.388-.963q.387-.387.962-.387t.963.387Q7 4.075 7 4.65t-.387.962Q6.225 6 5.65 6ZM3.3 11V9.15q0-.35.25-.6t.6-.25h3q1.225 0 2.15-.7.925-.7 1.3-1.8h.725q-.25 1.15-1.162 2Q9.25 8.65 8 8.925V11Zm15.05 4.7q-.575 0-.962-.388Q17 14.925 17 14.35t.388-.963q.387-.387.962-.387t.962.387q.388.388.388.963t-.388.962q-.387.388-.962.388Zm-2.35 5v-2.075q-1.2-.275-2.1-1.1-.9-.825-1.2-2.025h.7q.375 1.1 1.3 1.8t2.15.7h3q.35 0 .6.25t.25.6v1.85Z"/>
    </Icon>
  );
});

IconMaterialConnectWithoutContactW100.displayName = 'AmauiIconMaterialConnectWithoutContactW100';

export default IconMaterialConnectWithoutContactW100;
