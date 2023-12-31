import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallLog = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLog'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-800q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h320q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H520Zm0 160q-17 0-28.5-11.5T480-680q0-17 11.5-28.5T520-720h320q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H520Zm0 160q-17 0-28.5-11.5T480-520q0-17 11.5-28.5T520-560h320q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480H520ZM758-80q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T80-758q0-18 12-30t30-12h162q14 0 25 9t13 23l26 140q2 14-.5 25.5T336-582l-97 98q42 72 105.5 135T484-240l94-94q9-9 23.5-13.5T630-350l138 28q14 3 23 13.5t9 24.5v162q0 18-12 30t-30 12ZM201-560l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM201-560Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialCallLog.displayName = 'AmauiIconMaterialCallLog';

export default IconMaterialCallLog;
