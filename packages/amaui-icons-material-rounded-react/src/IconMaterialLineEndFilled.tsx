import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndFilled'

      short_name='LineEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 14.5q-.775 0-1.4-.425-.625-.425-.9-1.075H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h14.2q.275-.65.9-1.075.625-.425 1.4-.425 1.05 0 1.775.725Q22 10.95 22 12q0 1.05-.725 1.775-.725.725-1.775.725Z"/>
    </Icon>
  );
});

IconMaterialLineEndFilled.displayName = 'AmauiIconMaterialLineEndFilled';

export default IconMaterialLineEndFilled;
