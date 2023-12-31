import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallQuality = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQuality'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-80q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T80-758q0-18 12-30t30-12h162q14 0 25 9t13 23l26 140q2 14-.5 25.5T336-582l-97 98q42 72 105.5 135T484-240l94-94q9-9 23.5-13.5T630-350l138 28q14 3 23 13.5t9 24.5v162q0 18-12 30t-30 12ZM201-560l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM201-560Zm358 358Zm121-278q-83 0-141.5-58.5T480-680q0-83 58.5-141.5T680-880q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCallQuality.displayName = 'AmauiIconMaterialCallQuality';

export default IconMaterialCallQuality;
