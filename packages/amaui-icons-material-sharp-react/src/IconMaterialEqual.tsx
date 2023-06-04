import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqual = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equal'

      short_name='Equal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V656h640v120H160Zm0-280V376h640v120H160Z"/>
    </Icon>
  );
});

IconMaterialEqual.displayName = 'AmauiIconMaterialEqual';

export default IconMaterialEqual;
