import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInput'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11q-.425 0-.712-.288Q2 10.425 2 10t.288-.713Q2.575 9 3 9h17q.425 0 .712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm0 4q-.425 0-.712-.288Q2 14.425 2 14t.288-.713Q2.575 13 3 13h3.025q.425 0 .7.287Q7 13.575 7 14t-.287.712Q6.425 15 6 15Zm7 0q-.425 0-.712-.288Q9 14.425 9 14t.288-.713Q9.575 13 10 13h3q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 15 13 15Zm6.975 0q-.425 0-.7-.288Q16 14.425 16 14t.288-.713Q16.575 13 17 13h3q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialPowerInput.displayName = 'AmauiIconMaterialPowerInput';

export default IconMaterialPowerInput;
