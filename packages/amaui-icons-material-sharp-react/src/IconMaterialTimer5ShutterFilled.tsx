import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5ShutterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5ShutterFilled'

      short_name='Timer5Shutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200v-120h240v-100H320v-340h360v120H440v100h240v340H320Z"/>
    </Icon>
  );
});

IconMaterialTimer5ShutterFilled.displayName = 'AmauiIconMaterialTimer5ShutterFilled';

export default IconMaterialTimer5ShutterFilled;
