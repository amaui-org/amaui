import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrosswordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrosswordW100Filled'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M373-132v-213h213v213H373ZM132-373v-213h213v213H132Zm241 0v-213h213v213H373Zm241 0v-213h214v213H614Zm0-241v-214h214v214H614Z"/>
    </Icon>
  );
});

IconMaterialCrosswordW100Filled.displayName = 'AmauiIconMaterialCrosswordW100Filled';

export default IconMaterialCrosswordW100Filled;
