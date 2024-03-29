import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideSourceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceFilled'

      short_name='HideSource'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.1 21.9-1.575-1.55q-1.225.8-2.612 1.225-1.388.425-2.888.425-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.138-3.175-.787-1.825-.787-3.9 0-1.5.425-2.888.425-1.387 1.225-2.612L2.1 4.925q-.3-.3-.288-.713.013-.412.288-.687.3-.3.725-.3t.7.3l17 16.975q.3.3.287.712-.012.413-.287.688-.3.3-.725.3t-.7-.3Zm1.275-4.4L6.525 3.65q1.225-.8 2.612-1.225Q10.525 2 12.025 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.138 3.175.787 1.825.787 3.9 0 1.5-.425 2.887-.425 1.388-1.225 2.613Z"/>
    </Icon>
  );
});

IconMaterialHideSourceFilled.displayName = 'AmauiIconMaterialHideSourceFilled';

export default IconMaterialHideSourceFilled;
