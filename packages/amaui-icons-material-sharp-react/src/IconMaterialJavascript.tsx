import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJavascript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Javascript'

      short_name='Javascript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15Zm-6 0v-2.5h1.5v1H9V9h1.5v6Z"/>
    </Icon>
  );
});

IconMaterialJavascript.displayName = 'AmauiIconMaterialJavascript';

export default IconMaterialJavascript;
