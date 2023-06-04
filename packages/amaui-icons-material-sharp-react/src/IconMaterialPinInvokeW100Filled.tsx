import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinInvokeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeW100Filled'

      short_name='PinInvoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.125 16.35-.5-.5 4.55-4.525H10v-.7h4.35v4.35h-.7v-3.15ZM18.45 9.8q-.925 0-1.587-.663-.663-.662-.663-1.587 0-.95.663-1.6.662-.65 1.587-.65.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.587-.65.663-1.6.663ZM3.3 18.7V5.3h10.35V6H4v12h16v-5.65h.7v6.35Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeW100Filled.displayName = 'AmauiIconMaterialPinInvokeW100Filled';

export default IconMaterialPinInvokeW100Filled;
