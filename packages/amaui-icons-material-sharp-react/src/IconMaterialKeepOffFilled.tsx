import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOffFilled'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-840v80h-40v327L313-760l-33-33v-47h400ZM480-40l-40-40v-240H240v-80l80-80v-46L56-792l56-56 736 736-58 56-264-264h-6v240l-40 40Z"/>
    </Icon>
  );
});

IconMaterialKeepOffFilled.displayName = 'AmauiIconMaterialKeepOffFilled';

export default IconMaterialKeepOffFilled;
