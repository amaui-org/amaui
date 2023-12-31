import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoW100'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-212q-37 0-62.5-25.5T612-300q0-37 25.5-62.5T700-388q37 0 62.5 25.5T788-300q0 37-25.5 62.5T700-212Zm0-28q25 0 42.5-17.5T760-300q0-25-17.5-42.5T700-360q-25 0-42.5 17.5T640-300q0 25 17.5 42.5T700-240Zm-528-46v-28h320v28H172Zm88-286q-37 0-62.5-25.5T172-660q0-37 25.5-62.5T260-748q37 0 62.5 25.5T348-660q0 37-25.5 62.5T260-572Zm0-28q25 0 42.5-17.5T320-660q0-25-17.5-42.5T260-720q-25 0-42.5 17.5T200-660q0 25 17.5 42.5T260-600Zm208-46v-28h320v28H468Z"/>
    </Icon>
  );
});

IconMaterialPageInfoW100.displayName = 'AmauiIconMaterialPageInfoW100';

export default IconMaterialPageInfoW100;
