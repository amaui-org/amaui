import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircleW100'

      short_name='PlaylistAddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 14.35v1.925q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25v-1.9h1.925q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.9v-1.925q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v1.9h-1.925q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm-7.65-3h5.025q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0-3h5.025q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0 6h1.025q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm4 6.35q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleW100.displayName = 'AmauiIconMaterialPlaylistAddCircleW100';

export default IconMaterialPlaylistAddCircleW100;
