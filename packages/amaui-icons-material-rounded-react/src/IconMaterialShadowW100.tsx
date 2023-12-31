import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowW100'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h80v-100q0-26 17-43t43-17h436q26 0 43 17t17 43v436q0 26-17 43t-43 17H668v80q0 26-17 43t-43 17H192Zm140-168h436q12 0 22-10t10-22v-436q0-12-10-22t-22-10H332q-12 0-22 10t-10 22v436q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialShadowW100.displayName = 'AmauiIconMaterialShadowW100';

export default IconMaterialShadowW100;
