import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlutterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlutterFilled'

      short_name='Flutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z"/>
    </Icon>
  );
});

IconMaterialFlutterFilled.displayName = 'AmauiIconMaterialFlutterFilled';

export default IconMaterialFlutterFilled;
