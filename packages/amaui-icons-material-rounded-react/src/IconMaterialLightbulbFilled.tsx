import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightbulbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbFilled'

      short_name='Lightbulb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-3-3q-.425 0-.712-.288Q8 18.425 8 18t.288-.712Q8.575 17 9 17h6q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 19 15 19Zm-.75-3q-1.725-1.025-2.737-2.75Q4.5 11.525 4.5 9.5q0-3.125 2.188-5.312Q8.875 2 12 2q3.125 0 5.312 2.188Q19.5 6.375 19.5 9.5q0 2.025-1.012 3.75-1.013 1.725-2.738 2.75Z"/>
    </Icon>
  );
});

IconMaterialLightbulbFilled.displayName = 'AmauiIconMaterialLightbulbFilled';

export default IconMaterialLightbulbFilled;
