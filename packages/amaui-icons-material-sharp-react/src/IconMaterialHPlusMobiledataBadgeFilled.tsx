import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadgeFilled'

      short_name='HPlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M180 776h80V616h160v160h80V376h-80v160H260V376h-80v400Zm440-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM40 936V216h880v720H40Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadgeFilled.displayName = 'AmauiIconMaterialHPlusMobiledataBadgeFilled';

export default IconMaterialHPlusMobiledataBadgeFilled;
