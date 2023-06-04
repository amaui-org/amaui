import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemove'

      short_name='PlaylistRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M3,16h7v-2H3V16z M14.41,22L17,19.41L19.59,22L21,20.59L18.41,18L21,15.41L19.59,14 L17,16.59L14.41,14L13,15.41L15.59,18L13,20.59L14.41,22z"/></g>
    </Icon>
  );
});

IconMaterialPlaylistRemove.displayName = 'AmauiIconMaterialPlaylistRemove';

export default IconMaterialPlaylistRemove;
