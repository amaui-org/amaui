import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApproval = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Approval'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-8h16v8Zm2-4h12v-2H6Zm6-4L7 7q0-2.075 1.463-3.537Q9.925 2 12 2t3.538 1.463Q17 4.925 17 7Zm0-2.8L15 7q0-1.25-.875-2.125T12 4q-1.25 0-2.125.875T9 7Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialApproval.displayName = 'AmauiIconMaterialApproval';

export default IconMaterialApproval;
