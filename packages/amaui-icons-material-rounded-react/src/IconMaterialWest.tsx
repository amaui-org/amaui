import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='West'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 18.3-5.6-5.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l5.6-5.6q.275-.275.688-.275.412 0 .712.275.3.3.3.712 0 .413-.3.713L5.825 11H21q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13H5.825L9.7 16.9q.275.275.288.687Q10 18 9.7 18.3q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialWest.displayName = 'AmauiIconMaterialWest';

export default IconMaterialWest;
