import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenFilled'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h11q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 18 15 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h8q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 13 12 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h11q.425 0 .713.287Q16 6.575 16 7t-.287.713Q15.425 8 15 8Zm13.4 4 2.9 2.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-3.6-3.6q-.3-.3-.3-.7 0-.4.3-.7l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenFilled.displayName = 'AmauiIconMaterialMenuOpenFilled';

export default IconMaterialMenuOpenFilled;
