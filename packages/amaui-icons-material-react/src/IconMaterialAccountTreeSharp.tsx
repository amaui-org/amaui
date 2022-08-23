import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountTreeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeSharp'
      short_name='AccountTree'

      {...props}
    >
      <path d="M15 21V18H11V8H9V11H2V3H9V6H15V3H22V11H15V8H13V16H15V13H22V21ZM4 5V9ZM17 15V19ZM17 5V9ZM17 9H20V5H17ZM17 19H20V15H17ZM4 9H7V5H4Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeSharp.displayName = 'AmauiIconMaterialAccountTreeSharp';

export default IconMaterialAccountTreeSharp;
