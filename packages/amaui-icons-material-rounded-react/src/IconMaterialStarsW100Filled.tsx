import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsW100Filled'

      short_name='Stars'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14.5 2.375 1.8q.225.2.463.025.237-.175.162-.45l-.9-2.975 2.3-1.625q.25-.175.15-.45t-.375-.275H13.35l-.975-3.125Q12.3 7.15 12 7.15t-.375.275l-.975 3.125H7.825q-.275 0-.375.275-.1.275.15.45L9.9 12.9 9 15.875q-.075.275.163.45.237.175.462-.025Zm0 6.2q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialStarsW100Filled.displayName = 'AmauiIconMaterialStarsW100Filled';

export default IconMaterialStarsW100Filled;
