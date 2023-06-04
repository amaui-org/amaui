import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadge'

      short_name='3gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 936V216h880v720H40Zm80-80h720V296H120v560Zm0 0V296v560Zm360-80h280V536H640v80h40v80H560V456h200v-80H480v400Zm-280 0h240V616l-40-40 40-40V376H200v80h160v80H200v80h160v80H200v80Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadge.displayName = 'AmauiIconMaterial3gMobiledataBadge';

export default IconMaterial3gMobiledataBadge;
