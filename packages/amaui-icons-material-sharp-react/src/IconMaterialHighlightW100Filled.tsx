import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightW100Filled'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 8.15 4.9 6.4l.5-.5 1.75 1.75Zm5-2v-2.5h.7v2.5Zm5.7 2-.5-.5L18.6 5.9l.5.5ZM10.3 20.7v-4.25l-3-3V10.3h9.4v3.15l-3 3v4.25Z"/>
    </Icon>
  );
});

IconMaterialHighlightW100Filled.displayName = 'AmauiIconMaterialHighlightW100Filled';

export default IconMaterialHighlightW100Filled;
