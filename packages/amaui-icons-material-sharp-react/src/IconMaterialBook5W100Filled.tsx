import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5W100Filled'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-132q-29 0-49.5-19T212-198v-527q0-29 20.5-50.5T282-803l338-73v568l-347 77q-13 3-23 11.5T240-198q0 17 12.5 27.5T282-160h438v-588h28v616H282Zm18-133 28-6v-513l-28 6v513Z"/>
    </Icon>
  );
});

IconMaterialBook5W100Filled.displayName = 'AmauiIconMaterialBook5W100Filled';

export default IconMaterialBook5W100Filled;
