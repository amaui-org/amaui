import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandAwareness = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwareness'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-440v-80h160v80H640Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM120-360v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/>
    </Icon>
  );
});

IconMaterialBrandAwareness.displayName = 'AmauiIconMaterialBrandAwareness';

export default IconMaterialBrandAwareness;
