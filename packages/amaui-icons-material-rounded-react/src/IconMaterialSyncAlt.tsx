import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAlt'

      short_name='SyncAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.3 12.3q-.3-.3-.3-.713 0-.412.275-.687l1.9-1.9H4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h14.175l-1.9-1.9Q16 4.825 16 4.412q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.3.3-.712.287-.413-.012-.688-.287Zm-10 8-3.6-3.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l3.6-3.6q.275-.275.688-.288.412-.012.712.288.3.275.312.687.013.413-.287.713l-1.9 1.9H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17H5.825l1.9 1.9q.275.275.287.7.013.425-.287.7-.275.3-.7.3-.425 0-.725-.3Z"/>
    </Icon>
  );
});

IconMaterialSyncAlt.displayName = 'AmauiIconMaterialSyncAlt';

export default IconMaterialSyncAlt;
