import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpgrade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upgrade'

      short_name='Upgrade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-.425 0-.712-.288Q11 15.425 11 15V7.825L9.1 9.7q-.275.275-.687.288Q8 10 7.7 9.7q-.275-.275-.275-.7 0-.425.275-.7l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275L13 7.825V15q0 .425-.287.712Q12.425 16 12 16Zm-4 4q-.425 0-.713-.288Q7 19.425 7 19t.287-.712Q7.575 18 8 18h8q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialUpgrade.displayName = 'AmauiIconMaterialUpgrade';

export default IconMaterialUpgrade;
