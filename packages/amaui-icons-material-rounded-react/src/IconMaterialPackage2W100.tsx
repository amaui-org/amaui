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
      <path d="M466-168v-304L200-626v286q0 8 4 15t12 12l250 145Zm28 0 250-145q8-5 12-12t4-15v-286L494-472v304Zm-44 23L202-288q-14-8-22-22t-8-30v-280q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510-145q-14 8-30 8t-30-8Zm175-435 118-68-247-143q-8-5-16-5t-16 5l-101 58 262 153Zm-145 84 117-68-263-152-117 68 263 152Z"/>
    </Icon>
  );
});

IconMaterialPackage2W100.displayName = 'AmauiIconMaterialPackage2W100';

export default IconMaterialPackage2W100;
