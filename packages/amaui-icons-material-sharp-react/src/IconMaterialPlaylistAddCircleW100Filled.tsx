import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircleW100Filled'

      short_name='PlaylistAddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 16.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm-8-2h1.7v-.7h-1.7Zm0-3h5.7v-.7h-5.7Zm0-3h5.7v-.7h-5.7ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleW100Filled.displayName = 'AmauiIconMaterialPlaylistAddCircleW100Filled';

export default IconMaterialPlaylistAddCircleW100Filled;
