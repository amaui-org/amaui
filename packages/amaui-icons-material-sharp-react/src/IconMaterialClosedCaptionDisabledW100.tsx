import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.1 5.3h11.6v11.6l-.7-.7V6H8.8Zm9 8v1l-.7-.7v-.3Zm-.7-2.55v-.65h-2.8v.7l-.65-.65V9.4h4.15v1.35Zm-2.5.35Zm-2.775 1.025ZM9.4 9.4l.7.7H7.6v3.8h2.8v-.6h.7v1.3H6.9V9.4ZM5.35 5.35 6 6H5v12h12L2.25 3.25l.5-.5L21.8 21.8l-.5.5-3.6-3.6H4.3V5.35Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100.displayName = 'AmauiIconMaterialClosedCaptionDisabledW100';

export default IconMaterialClosedCaptionDisabledW100;
