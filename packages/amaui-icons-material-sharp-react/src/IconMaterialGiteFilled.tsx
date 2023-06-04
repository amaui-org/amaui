import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGiteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteFilled'

      short_name='Gite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-9l4-4h1V4h2v2h9l4 4v9Zm14-2h4v-6.175l-2-2-2 2ZM4 17h10v-5H4Z"/>
    </Icon>
  );
});

IconMaterialGiteFilled.displayName = 'AmauiIconMaterialGiteFilled';

export default IconMaterialGiteFilled;
