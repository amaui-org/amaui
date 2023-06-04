import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadgeFilled'

      short_name='3gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776h280V536H640v80h40v80H560V456h200v-80H480v400Zm-280 0h240V616l-40-40 40-40V376H200v80h160v80H200v80h160v80H200v80ZM40 936V216h880v720H40Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadgeFilled.displayName = 'AmauiIconMaterial3gMobiledataBadgeFilled';

export default IconMaterial3gMobiledataBadgeFilled;
