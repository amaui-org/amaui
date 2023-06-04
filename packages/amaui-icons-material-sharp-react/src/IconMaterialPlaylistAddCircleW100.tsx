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
      <path d="M15.65 16.6h.7v-2.25h2.25v-.7h-2.25V11.4h-.7v2.25H13.4v.7h2.25Zm-8-2.25h1.7v-.7h-1.7Zm0-3h5.7v-.7h-5.7Zm0-3h5.7v-.7h-5.7ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleW100.displayName = 'AmauiIconMaterialPlaylistAddCircleW100';

export default IconMaterialPlaylistAddCircleW100;
