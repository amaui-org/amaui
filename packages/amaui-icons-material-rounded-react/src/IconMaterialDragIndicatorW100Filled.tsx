import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragIndicatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragIndicatorW100Filled'

      short_name='DragIndicator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.712Q8.6 17 9 17q.425 0 .713.288.287.287.287.712 0 .4-.287.7-.288.3-.713.3Zm6 0q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.712.3-.288.7-.288.425 0 .713.288.287.287.287.712 0 .4-.287.7-.288.3-.713.3Zm-6-6q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q8.6 11 9 11q.425 0 .713.287.287.288.287.713 0 .4-.287.7-.288.3-.713.3Zm6 0q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713.3-.287.7-.287.425 0 .713.287.287.288.287.713 0 .4-.287.7-.288.3-.713.3ZM9 7q-.4 0-.7-.3Q8 6.4 8 6q0-.425.3-.713Q8.6 5 9 5q.425 0 .713.287Q10 5.575 10 6q0 .4-.287.7Q9.425 7 9 7Zm6 0q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q14.6 5 15 5q.425 0 .713.287Q16 5.575 16 6q0 .4-.287.7-.288.3-.713.3Z"/>
    </Icon>
  );
});

IconMaterialDragIndicatorW100Filled.displayName = 'AmauiIconMaterialDragIndicatorW100Filled';

export default IconMaterialDragIndicatorW100Filled;
