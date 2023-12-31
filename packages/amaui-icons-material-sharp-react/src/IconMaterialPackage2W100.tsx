import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package2W100'

      short_name='Package2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-168v-304L200-626v304l266 154Zm28 0 266-154v-304L494-472v304Zm-14 40L172-305v-350l308-177 308 177v350L480-128Zm145-452 118-68-263-152-117 67 262 153Zm-145 84 117-68-263-152-117 68 263 152Z"/>
    </Icon>
  );
});

IconMaterialPackage2W100.displayName = 'AmauiIconMaterialPackage2W100';

export default IconMaterialPackage2W100;
