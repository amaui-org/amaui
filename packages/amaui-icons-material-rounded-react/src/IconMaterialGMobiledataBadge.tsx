import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadge'

      short_name='GMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm0-80h560V296H200v560Zm0-560v560-560Zm200 480h160q33 0 56.5-23.5T640 696V576q0-17-11.5-28.5T600 536h-80q-17 0-28.5 11.5T480 576q0 17 11.5 28.5T520 616h40v80H400V456h240q0-33-23.5-56.5T560 376H400q-33 0-56.5 23.5T320 456v240q0 33 23.5 56.5T400 776Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadge.displayName = 'AmauiIconMaterialGMobiledataBadge';

export default IconMaterialGMobiledataBadge;
