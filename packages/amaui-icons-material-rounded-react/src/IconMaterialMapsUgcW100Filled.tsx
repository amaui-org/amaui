import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcW100Filled'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.775 4.35 16.2q-.475-1-.762-2.05Q3.3 13.1 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7q-1.1 0-2.15-.287-1.05-.288-2.05-.763L4.225 20.7q-.425.125-.737-.188-.313-.312-.188-.737ZM12 15.35q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V15q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcW100Filled.displayName = 'AmauiIconMaterialMapsUgcW100Filled';

export default IconMaterialMapsUgcW100Filled;
