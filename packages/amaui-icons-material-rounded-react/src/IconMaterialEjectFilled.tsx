import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectFilled'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 19 18 19Zm1.225-4q-.6 0-.887-.525-.288-.525.037-1.025l4.8-7.2q.3-.45.825-.45.525 0 .825.45l4.8 7.2q.325.5.038 1.025-.288.525-.888.525Z"/>
    </Icon>
  );
});

IconMaterialEjectFilled.displayName = 'AmauiIconMaterialEjectFilled';

export default IconMaterialEjectFilled;
