import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 13.45v.7H11v-.7Zm0 3.55v.7H11V17Zm0-7.15v.7H11v-.7Zm0-3.55V7H11v-.7ZM15 7v10Zm-.7-.7h5.4v11.4h-5.4Zm.7.7v10h4V7Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100.displayName = 'AmauiIconMaterialVerticalSplitW100';

export default IconMaterialVerticalSplitW100;
