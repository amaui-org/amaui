import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackFilled'

      short_name='ArrowBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.875 19.3-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713L7.4 11h11.175q.425 0 .713.287.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7.012.425-.288.7-.275.3-.7.3-.425 0-.725-.3Z"/>
    </Icon>
  );
});

IconMaterialArrowBackFilled.displayName = 'AmauiIconMaterialArrowBackFilled';

export default IconMaterialArrowBackFilled;
