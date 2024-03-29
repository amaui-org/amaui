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
      <path d="M480-800v-80h400v80H480Zm0 160v-80h400v80H480Zm0 160v-80h400v80H480ZM758-80q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T80-758v-42h236l37 201-114 115q42 72 105.5 135T484-240l116-116 200 40v236h-42ZM201-560l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM201-560Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialCallLog.displayName = 'AmauiIconMaterialCallLog';

export default IconMaterialCallLog;
