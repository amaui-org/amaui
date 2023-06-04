import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderFilled'

      short_name='RuleFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.825 16 4.95-4.95-1.425-1.425-3.525 3.55L6.4 11.75 5 13.175Zm6.575 0 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6 1.6-1.6-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6ZM2 4h8l2 2h10v14H2Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderFilled.displayName = 'AmauiIconMaterialRuleFolderFilled';

export default IconMaterialRuleFolderFilled;
