import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMade'

      short_name='CallMade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 19.3q-.275-.275-.275-.7 0-.425.275-.7L15.6 7H10q-.425 0-.712-.287Q9 6.425 9 6t.288-.713Q9.575 5 10 5h8q.425 0 .712.287Q19 5.575 19 6v8q0 .425-.288.712Q18.425 15 18 15t-.712-.288Q17 14.425 17 14V8.4L6.075 19.325Q5.8 19.6 5.4 19.6t-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialCallMade.displayName = 'AmauiIconMaterialCallMade';

export default IconMaterialCallMade;
