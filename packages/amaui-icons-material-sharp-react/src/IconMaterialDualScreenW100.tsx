import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m280 799 240 97V351l-240-95v543Zm-28 20V228h30l266 105v605L252 819Zm268-15v-28h160V256H282v-28h426v576H520Zm-240-5V256v543Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100.displayName = 'AmauiIconMaterialDualScreenW100';

export default IconMaterialDualScreenW100;
