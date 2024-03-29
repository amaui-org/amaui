import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesWearables = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearables'

      short_name='DevicesWearables'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 296h320v-40H160v40Zm0 680q-33 0-56.5-23.5T80 896V256q0-33 23.5-56.5T160 176h320q33 0 56.5 23.5T560 256v154q-23 12-43 27.5T480 472v-96H160v400h257q8 22 18.5 42t24.5 38H160v40h320v-16q15 17 32 31t37 25q-11 18-28.5 29T480 976H160Zm540-160q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm-60 160q-17 0-28.5-11.5T600 936v-64q-54-27-87-79t-33-117q0-65 33-117t87-79v-64q0-17 11.5-28.5T640 376h120q17 0 28.5 11.5T800 416v64q54 27 87 79t33 117q0 65-33 117t-87 79v64q0 17-11.5 28.5T760 976H640ZM160 856v40-40Zm0-560v-40 40Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearables.displayName = 'AmauiIconMaterialDevicesWearables';

export default IconMaterialDevicesWearables;
