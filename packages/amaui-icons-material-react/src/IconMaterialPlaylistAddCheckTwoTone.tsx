import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckTwoTone'
      short_name='PlaylistAddCheck'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="11" x="3" y="10"/><rect height="2" width="11" x="3" y="6"/><rect height="2" width="7" x="3" y="14"/><polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34"/></g></g>
    </Icon>
  );
});

export default IconMaterialPlaylistAddCheckTwoTone;
