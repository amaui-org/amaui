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
      <path d="M160 296h320v-40H160v40ZM80 976V176h480v234q-23 12-43 27.5T480 472v-96H160v400h257q8 22 18.5 42t24.5 38H160v40h320v-16q15 17 32 31t37 25v40H80Zm620-160q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM600 976V872q-54-27-87-79t-33-117q0-65 33-117t87-79V376h200v104q54 27 87 79t33 117q0 65-33 117t-87 79v104H600ZM160 856v40-40Zm0-560v-40 40Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearables.displayName = 'AmauiIconMaterialDevicesWearables';

export default IconMaterialDevicesWearables;
