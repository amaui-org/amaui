import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeFilled'

      short_name='Code'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 17.3q-.275.275-.687.275-.413 0-.713-.3t-.3-.713q0-.412.3-.712l3.875-3.875-3.9-3.9Q15 7.8 15.012 7.387q.013-.412.288-.687.275-.275.7-.275.425 0 .7.275l4.6 4.6q.3.3.3.7 0 .4-.3.7Zm-9.4 0-4.6-4.6q-.3-.3-.3-.7 0-.4.3-.7l4.6-4.6q.275-.275.7-.288.425-.012.725.288t.3.712q0 .413-.3.713l-3.9 3.9 3.9 3.9q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialCodeFilled.displayName = 'AmauiIconMaterialCodeFilled';

export default IconMaterialCodeFilled;
