import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsW100Filled'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h386l170 170v386q0 26-17 43t-43 17H232Zm74-160h348v-28H306v28Zm0-134h348v-28H306v28Zm294-134h160L600-760v160Zm-294 0h174v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialNewsW100Filled.displayName = 'AmauiIconMaterialNewsW100Filled';

export default IconMaterialNewsW100Filled;
