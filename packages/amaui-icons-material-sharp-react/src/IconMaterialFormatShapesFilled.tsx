import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatShapesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapesFilled'

      short_name='FormatShapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2Zm6-4h10v-2h2V7h-2V5H7v2H5v10h2Zm.8-3 3.4-9h1.6l3.4 9h-1.55l-.8-2.3H10.2L9.4 16Zm2.85-3.6h2.7l-1.3-3.75h-.1Z"/>
    </Icon>
  );
});

IconMaterialFormatShapesFilled.displayName = 'AmauiIconMaterialFormatShapesFilled';

export default IconMaterialFormatShapesFilled;
