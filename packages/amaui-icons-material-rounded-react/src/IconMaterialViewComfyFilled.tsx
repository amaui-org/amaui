import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyFilled'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 10q0 .425-.288.712Q21.425 11 21 11H3q-.425 0-.712-.288Q2 10.425 2 10V5q0-.425.288-.713Q2.575 4 3 4h18q.425 0 .712.287Q22 4.575 22 5ZM11 20q-.425 0-.712-.288Q10 19.425 10 19v-5q0-.425.288-.713Q10.575 13 11 13h10q.425 0 .712.287.288.288.288.713v5q0 .425-.288.712Q21.425 20 21 20Zm-8 0q-.425 0-.712-.288Q2 19.425 2 19v-5q0-.425.288-.713Q2.575 13 3 13h4q.425 0 .713.287Q8 13.575 8 14v5q0 .425-.287.712Q7.425 20 7 20Z"/>
    </Icon>
  );
});

IconMaterialViewComfyFilled.displayName = 'AmauiIconMaterialViewComfyFilled';

export default IconMaterialViewComfyFilled;
