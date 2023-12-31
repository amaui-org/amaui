import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeImprovementAndToolsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeImprovementAndToolsFilled'

      short_name='HomeImprovementAndTools'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-880h480L600-712v152H360v-152L240-880Zm120 400h240v80H360v-80Zm0 160h240v120L480-80 360-200v-120Z"/>
    </Icon>
  );
});

IconMaterialHomeImprovementAndToolsFilled.displayName = 'AmauiIconMaterialHomeImprovementAndToolsFilled';

export default IconMaterialHomeImprovementAndToolsFilled;
