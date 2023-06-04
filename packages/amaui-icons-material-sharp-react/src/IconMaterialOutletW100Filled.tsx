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
      <path d="M8.65 11.85h.7v-3.7h-.7Zm6 0h.7v-3.7h-.7Zm-4 5h2.7V15.5q0-.575-.387-.963-.388-.387-.963-.387t-.962.387q-.388.388-.388.963ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialOutletW100Filled.displayName = 'AmauiIconMaterialOutletW100Filled';

export default IconMaterialOutletW100Filled;
