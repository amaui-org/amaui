import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsW100'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h386l170 170v386q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-368H600v-160H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm74-132h348v-28H306v28Zm0-268h174v-28H306v28Zm0 134h348v-28H306v28ZM200-760v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialNewsW100.displayName = 'AmauiIconMaterialNewsW100';

export default IconMaterialNewsW100;
