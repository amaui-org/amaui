import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMerge'

      short_name='CallMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 19.3q-.275-.275-.275-.7 0-.425.275-.7l4.3-4.3V6.875L9.125 8.75q-.275.275-.687.275-.413 0-.713-.3t-.3-.713q0-.412.3-.712L11.3 3.725q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.625 3.625q.275.275.288.687.012.413-.288.713t-.712.3q-.413 0-.713-.3L13 6.875V14.4l-4.925 4.925Q7.8 19.6 7.4 19.6t-.7-.3Zm9.2.025-2.5-2.475 1.425-1.425 2.5 2.525q.275.275.275.675t-.3.7q-.275.275-.687.275-.413 0-.713-.275Z"/>
    </Icon>
  );
});

IconMaterialCallMerge.displayName = 'AmauiIconMaterialCallMerge';

export default IconMaterialCallMerge;
