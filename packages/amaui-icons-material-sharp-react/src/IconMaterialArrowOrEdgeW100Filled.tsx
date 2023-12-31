import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowOrEdgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOrEdgeW100Filled'

      short_name='ArrowOrEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M317-171 194-294l19-20 90 90v-304H104v-260h28v232h199v331l90-89 19 20-123 123Zm326 0L520-294l19-20 90 90v-332h199v-232h28v260H657v304l90-90 19 20-123 123Z"/>
    </Icon>
  );
});

IconMaterialArrowOrEdgeW100Filled.displayName = 'AmauiIconMaterialArrowOrEdgeW100Filled';

export default IconMaterialArrowOrEdgeW100Filled;
