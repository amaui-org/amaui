import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileOff'

      short_name='AttachFileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M470-80q-104 0-177-73t-73-177v-298L56-792l56-56 736 736-56 56-123-123q-35 45-86.5 72T470-80ZM300-548v218q-1 71 49 120.5T470-160q45 0 81.5-21t59.5-56l-50-50q-15 22-38.5 34.5T470-240q-46 0-78-32t-32-78v-138l-60-60Zm140 140v58q0 13 8.5 21.5T470-320q12 0 20.5-8t9.5-20l-60-60Zm200-26v-286h80v366l-80-80ZM500-574v-126q-1-42-29.5-71T400-800q-26 0-47 12t-35 32l-57-57q25-31 61-49t78-18q75 0 127.5 52.5T580-700v206l-80-80Zm-60-146v86l-80-80v-6h80Z"/>
    </Icon>
  );
});

IconMaterialAttachFileOff.displayName = 'AmauiIconMaterialAttachFileOff';

export default IconMaterialAttachFileOff;
