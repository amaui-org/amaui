import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package2'

      short_name='Package2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274ZM480-68 120-275v-410l360-207 360 207v410L480-68Zm160-551 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/>
    </Icon>
  );
});

IconMaterialPackage2.displayName = 'AmauiIconMaterialPackage2';

export default IconMaterialPackage2;
