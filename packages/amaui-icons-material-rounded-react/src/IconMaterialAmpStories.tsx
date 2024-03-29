import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmpStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStories'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.425 0-.713-.288Q7 19.425 7 19V5q0-.425.287-.713Q7.575 4 8 4h8q.425 0 .712.287Q17 4.575 17 5v14q0 .425-.288.712Q16.425 20 16 20Zm-5-3V6.975q0-.425.288-.7Q3.575 6 4 6t.713.287Q5 6.575 5 7v10.025q0 .425-.287.7Q4.425 18 4 18t-.712-.288Q3 17.425 3 17Zm16 0V6.975q0-.425.288-.7Q19.575 6 20 6t.712.287Q21 6.575 21 7v10.025q0 .425-.288.7Q20.425 18 20 18t-.712-.288Q19 17.425 19 17ZM9 18h6V6H9Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialAmpStories.displayName = 'AmauiIconMaterialAmpStories';

export default IconMaterialAmpStories;
