import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fpsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsFilled'

      short_name='30fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-3h6v-2.5H2v-3h6V8H2V5h9v14Zm13-3h4V8h-4Zm-3 3V5h10v14Z"/>
    </Icon>
  );
});

IconMaterial30fpsFilled.displayName = 'AmauiIconMaterial30fpsFilled';

export default IconMaterial30fpsFilled;
