import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadge'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm0-80h560V296H200v560Zm0-560v560-560Zm200 320h160v120q0 17 11.5 28.5T600 776q17 0 28.5-11.5T640 736V416q0-17-11.5-28.5T600 376q-17 0-28.5 11.5T560 416v120H400V416q0-17-11.5-28.5T360 376q-17 0-28.5 11.5T320 416v320q0 17 11.5 28.5T360 776q17 0 28.5-11.5T400 736V616Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadge.displayName = 'AmauiIconMaterialHMobiledataBadge';

export default IconMaterialHMobiledataBadge;
