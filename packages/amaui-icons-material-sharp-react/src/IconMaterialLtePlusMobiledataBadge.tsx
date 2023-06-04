import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataBadge'

      short_name='LtePlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 856V296v560Zm800-440h-80V296H120v560h720V736h80v200H40V216h880v200ZM160 736h160v-80h-80V416h-80v320Zm220 0h80V496h60v-80H320v80h60v240Zm180 0h160v-80h-80v-40h60v-80h-60v-40h80v-80H560v320Zm250-80h60v-50h50v-60h-50v-50h-60v50h-50v60h50v50Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataBadge.displayName = 'AmauiIconMaterialLtePlusMobiledataBadge';

export default IconMaterialLtePlusMobiledataBadge;
