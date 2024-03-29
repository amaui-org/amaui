import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatShapes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapes'

      short_name='FormatShapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2Zm6-4h10v-2h2V7h-2V5H7v2H5v10h2Zm.8-3 3.4-9h1.6l3.4 9h-1.55l-.8-2.3H10.2L9.4 16Zm2.85-3.6h2.7l-1.3-3.75h-.1ZM3 5h2V3H3Zm16 0h2V3h-2Zm0 16h2v-2h-2ZM3 21h2v-2H3ZM19 5Zm0 14ZM5 19ZM5 5Z"/>
    </Icon>
  );
});

IconMaterialFormatShapes.displayName = 'AmauiIconMaterialFormatShapes';

export default IconMaterialFormatShapes;
