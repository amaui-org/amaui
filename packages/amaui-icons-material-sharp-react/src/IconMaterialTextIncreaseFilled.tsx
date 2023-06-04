import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextIncreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseFilled'

      short_name='TextIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19 6.25 5h2.5L14 19h-2.4l-1.275-3.575h-5.65L3.4 19Zm4.4-5.6h4.2L7.55 7.6h-.1ZM18 16v-3h-3v-2h3V8h2v3h3v2h-3v3Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseFilled.displayName = 'AmauiIconMaterialTextIncreaseFilled';

export default IconMaterialTextIncreaseFilled;
