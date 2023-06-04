import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionW100Filled'

      short_name='ClosedCaption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.9 14.6h4.2v-1.3h-.7v.6H7.6v-3.8h2.8v.65h.7V9.4H6.9Zm6 0h4.2v-1.3h-.7v.6h-2.8v-3.8h2.8v.65h.7V9.4h-4.2Zm-8.6 4.1V5.3h15.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionW100Filled.displayName = 'AmauiIconMaterialClosedCaptionW100Filled';

export default IconMaterialClosedCaptionW100Filled;
