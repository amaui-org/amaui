import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Select'

      short_name='Select'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856h80v80Zm-80-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160q0-33 23.5-56.5T200 216v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760 936Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840 296h-80Z"/>
    </Icon>
  );
});

IconMaterialSelect.displayName = 'AmauiIconMaterialSelect';

export default IconMaterialSelect;
