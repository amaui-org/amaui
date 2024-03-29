import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScience = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Science'

      short_name='Science'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-1.275 0-1.812-1.137-.538-1.138.262-2.113L9 11V5H7V3h10v2h-2v6l5.55 6.75q.8.975.262 2.113Q20.275 21 19 21Zm0-2h14l-6-7.3V5h-2v6.7Zm7-7Z"/>
    </Icon>
  );
});

IconMaterialScience.displayName = 'AmauiIconMaterialScience';

export default IconMaterialScience;
