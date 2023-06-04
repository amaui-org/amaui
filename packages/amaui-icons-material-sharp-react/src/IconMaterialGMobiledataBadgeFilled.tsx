import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadgeFilled'

      short_name='GMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h320V536H480v80h80v80H400V456h240v-80H320v400ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadgeFilled.displayName = 'AmauiIconMaterialGMobiledataBadgeFilled';

export default IconMaterialGMobiledataBadgeFilled;
