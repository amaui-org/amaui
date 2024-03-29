import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbShade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShade'

      short_name='WbShade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.2 19.7-4.875-4.875q-.275-.275-.275-.625t.275-.625q.275-.275.625-.275t.625.275l4.875 4.875q.275.275.275.625t-.275.625q-.275.275-.625.275T19.2 19.7ZM15 20q-.425 0-.712-.288Q14 19.425 14 19v-2l3 3ZM5 20q-.425 0-.713-.288Q4 19.425 4 19v-9h-.8q-.35 0-.475-.3t.125-.55l4.8-4.8Q7.7 4.3 8 4.2q.05 0 .35.15l4.8 4.8q.25.25.125.55-.125.3-.475.3H12v9q0 .425-.287.712Q11.425 20 11 20Zm2-6h2v-4H7Z"/>
    </Icon>
  );
});

IconMaterialWbShade.displayName = 'AmauiIconMaterialWbShade';

export default IconMaterialWbShade;
