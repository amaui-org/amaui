import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Topic'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12h12v-2H6Zm0 4h8v-2H6ZM2 4h8l2 2h10v14H2Zm2 2v12h16V8h-8.825l-2-2Zm0 12V6v12Z"/>
    </Icon>
  );
});

IconMaterialTopic.displayName = 'AmauiIconMaterialTopic';

export default IconMaterialTopic;
