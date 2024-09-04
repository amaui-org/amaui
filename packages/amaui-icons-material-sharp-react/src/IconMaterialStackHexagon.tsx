import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagon'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-420 140-80v-160l-140-80-140 80v160l140 80Zm-67 220h217l7 53-589 72-74-597 126-14v80l-36 5 54 437 295-36Zm-233-80v-600h600v600H280Zm80-80h440v-440H360v440ZM218-164Zm362-416Z"/>
    </Icon>
  );
});

IconMaterialStackHexagon.displayName = 'AmauiIconMaterialStackHexagon';

export default IconMaterialStackHexagon;
