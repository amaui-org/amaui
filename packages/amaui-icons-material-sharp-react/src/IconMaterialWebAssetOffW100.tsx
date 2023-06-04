import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOffW100'

      short_name='WebAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18h13L7 8H4Zm6.8-10L8.1 5.3h12.6v12.6l-.7-.7V8Zm10.5 14.3-3.6-3.6H3.3V5.3h2v1L2.25 3.25l.5-.5L21.8 21.8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOffW100.displayName = 'AmauiIconMaterialWebAssetOffW100';

export default IconMaterialWebAssetOffW100;
