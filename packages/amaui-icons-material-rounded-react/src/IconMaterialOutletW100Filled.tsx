import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletW100Filled'

      short_name='Outlet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11.85q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25T9 8.15q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1Zm6 0q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1Zm-3.6 5h1.2q.325 0 .538-.212.212-.213.212-.538v-.6q0-.575-.387-.963-.388-.387-.963-.387t-.962.387q-.388.388-.388.963v.6q0 .325.213.538.212.212.537.212Zm.6 3.85q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialOutletW100Filled.displayName = 'AmauiIconMaterialOutletW100Filled';

export default IconMaterialOutletW100Filled;
