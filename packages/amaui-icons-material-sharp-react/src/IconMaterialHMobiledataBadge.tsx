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
      <path d="M320 776h80V616h160v160h80V376h-80v160H400V376h-80v400ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadge.displayName = 'AmauiIconMaterialHMobiledataBadge';

export default IconMaterialHMobiledataBadge;
