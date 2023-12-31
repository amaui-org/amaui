import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowAndEdge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowAndEdge'

      short_name='ArrowAndEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 320-280l56-56 64 63v-167q0-33-23.5-56.5T360-520H40v-320h80v240h240q36 0 67 14.5t53 39.5q22-25 53-39.5t67-14.5h240v-240h80v320H600q-33 0-56.5 23.5T520-440v167l63-63 57 56-160 160Z"/>
    </Icon>
  );
});

IconMaterialArrowAndEdge.displayName = 'AmauiIconMaterialArrowAndEdge';

export default IconMaterialArrowAndEdge;
