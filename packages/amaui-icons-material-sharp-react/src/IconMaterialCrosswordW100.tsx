import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrosswordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrosswordW100'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-160h195v-194H382v194ZM160-382h194v-195H160v195Zm222 0h195v-195H382v195Zm223 0h195v-195H605v195Zm0-223h195v-195H605v195ZM354-132v-222H132v-251h445v-223h251v474H605v222H354Z"/>
    </Icon>
  );
});

IconMaterialCrosswordW100.displayName = 'AmauiIconMaterialCrosswordW100';

export default IconMaterialCrosswordW100;
