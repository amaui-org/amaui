import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndW100Filled'

      short_name='PinEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.875 14.375 10.35 9.85V13h-.7V8.65H14v.7h-3.175l4.55 4.525ZM18.45 18.7q-.925 0-1.587-.662-.663-.663-.663-1.588 0-.95.663-1.6.662-.65 1.587-.65.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.588-.65.662-1.6.662Zm-15.15 0V5.3h17.4v6.35H20V6H4v12h9.65v.7Z"/>
    </Icon>
  );
});

IconMaterialPinEndW100Filled.displayName = 'AmauiIconMaterialPinEndW100Filled';

export default IconMaterialPinEndW100Filled;
