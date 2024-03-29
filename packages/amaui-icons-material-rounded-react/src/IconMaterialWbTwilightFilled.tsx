import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbTwilightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightFilled'

      short_name='WbTwilight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 9.375q-.3-.3-.287-.713.012-.412.312-.712l.725-.725q.275-.275.687-.275.413 0 .713.3.275.275.275.7 0 .425-.275.7l-.75.75q-.275.275-.687.275-.413 0-.713-.3ZM3 20q-.425 0-.712-.288Q2 19.425 2 19t.288-.712Q2.575 18 3 18h18q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 20 21 20Zm9-13q-.425 0-.712-.287Q11 6.425 11 6V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v1q0 .425-.287.713Q12.425 7 12 7ZM4.95 9.325 4.225 8.6q-.275-.275-.275-.688 0-.412.3-.712.275-.275.7-.275.425 0 .7.275l.75.75q.275.275.275.687 0 .413-.3.713t-.713.287q-.412-.012-.712-.312ZM5 16q0-2.925 2.038-4.963Q9.075 9 12 9t4.962 2.037Q19 13.075 19 16Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightFilled.displayName = 'AmauiIconMaterialWbTwilightFilled';

export default IconMaterialWbTwilightFilled;
