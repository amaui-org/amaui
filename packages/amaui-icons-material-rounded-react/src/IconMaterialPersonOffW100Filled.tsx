import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100Filled'

      short_name='PersonOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 18.2q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8h.413q.212 0 .412.025L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2.4-2.4ZM18 15.375Zm-4.475-4.65-3.75-3.75q.375-.575.963-.875.587-.3 1.262-.3 1.125 0 1.913.788.787.787.787 1.912 0 .675-.3 1.262-.3.588-.875.963Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100Filled.displayName = 'AmauiIconMaterialPersonOffW100Filled';

export default IconMaterialPersonOffW100Filled;
