import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArray = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArray'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17V7v10Zm10 2q-.425 0-.712-.288Q18 18.425 18 18V6q0-.425.288-.713Q18.575 5 19 5h1q.425 0 .712.287Q21 5.575 21 6v12q0 .425-.288.712Q20.425 19 20 19ZM8 19q-.425 0-.713-.288Q7 18.425 7 18V6q0-.425.287-.713Q7.575 5 8 5h8q.425 0 .712.287Q17 5.575 17 6v12q0 .425-.288.712Q16.425 19 16 19Zm-4 0q-.425 0-.712-.288Q3 18.425 3 18V6q0-.425.288-.713Q3.575 5 4 5h1q.425 0 .713.287Q6 5.575 6 6v12q0 .425-.287.712Q5.425 19 5 19ZM9 7v10h6V7Z"/>
    </Icon>
  );
});

IconMaterialViewArray.displayName = 'AmauiIconMaterialViewArray';

export default IconMaterialViewArray;
