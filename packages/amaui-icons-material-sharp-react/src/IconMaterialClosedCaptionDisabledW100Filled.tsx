import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100Filled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.6-3.6H4.3V5.3L2.25 3.25l.5-.5L21.8 21.8Zm-1.6-5.4-2.8-2.8h.2v-.8h-.7v.3l-2.8-2.8v-.7h2.8v.65h.7V9.4h-4.15v.75L8.1 5.3h11.6ZM6.9 14.6h4.2v-1.3h-.7v.6H7.6v-3.8h1.5l-.7-.7H6.9Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100Filled.displayName = 'AmauiIconMaterialClosedCaptionDisabledW100Filled';

export default IconMaterialClosedCaptionDisabledW100Filled;
