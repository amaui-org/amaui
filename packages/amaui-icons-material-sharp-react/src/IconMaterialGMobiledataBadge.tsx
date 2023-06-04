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
      <path d="M320 776h320V536H480v80h80v80H400V456h240v-80H320v400ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadge.displayName = 'AmauiIconMaterialGMobiledataBadge';

export default IconMaterialGMobiledataBadge;
