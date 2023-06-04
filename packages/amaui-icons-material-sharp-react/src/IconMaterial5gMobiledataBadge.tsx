import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadge'

      short_name='5gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 936V216h880v720H40Zm80-80h720V296H120v560Zm640-320H640v80h40v80H560V456h200v-80H480v400h280V536ZM200 776h240V536H280v-80h160v-80H200v240h160v80H200v80Zm-80 80V296v560Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadge.displayName = 'AmauiIconMaterial5gMobiledataBadge';

export default IconMaterial5gMobiledataBadge;
