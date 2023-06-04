import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderW100'

      short_name='RuleFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.825 15.075 4.025-4.025-.5-.5-3.525 3.525-1.4-1.4-.5.5Zm6.575 0 1.6-1.6 1.6 1.6.475-.475-1.6-1.6 1.6-1.6-.475-.475-1.6 1.6-1.6-1.6-.475.475 1.6 1.6-1.6 1.6ZM3.3 6.3H11l1 1h8.7v11.4H3.3ZM4 7v11h16V8h-8.275l-1-1Zm0 11V7v11Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderW100.displayName = 'AmauiIconMaterialRuleFolderW100';

export default IconMaterialRuleFolderW100;
