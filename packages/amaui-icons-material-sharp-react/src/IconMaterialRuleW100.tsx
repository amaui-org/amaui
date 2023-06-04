import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleW100'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 16.35v-.7h7.7v.7Zm0-8v-.7h7.7v.7ZM14.4 19.075l-.475-.475 2.6-2.6-2.6-2.6.475-.475 2.6 2.6 2.6-2.6.475.475-2.6 2.6 2.6 2.6-.475.475-2.6-2.6Zm2.15-9L13.925 7.45l.475-.475L16.525 9.1l4.25-4.25.475.5Z"/>
    </Icon>
  );
});

IconMaterialRuleW100.displayName = 'AmauiIconMaterialRuleW100';

export default IconMaterialRuleW100;
