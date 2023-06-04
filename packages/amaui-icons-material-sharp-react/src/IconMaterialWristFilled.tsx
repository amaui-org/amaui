import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWristFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristFilled'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 972 244 776H40V376h184l78-80h498v80H560v60h320v80H560v60h360v80H560v60h280v80H485l45 89-90 87Z"/>
    </Icon>
  );
});

IconMaterialWristFilled.displayName = 'AmauiIconMaterialWristFilled';

export default IconMaterialWristFilled;
