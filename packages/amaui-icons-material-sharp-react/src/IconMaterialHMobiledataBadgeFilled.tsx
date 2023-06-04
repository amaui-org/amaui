import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeFilled'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h80V616h160v160h80V376h-80v160H400V376h-80v400ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeFilled.displayName = 'AmauiIconMaterialHMobiledataBadgeFilled';

export default IconMaterialHMobiledataBadgeFilled;
