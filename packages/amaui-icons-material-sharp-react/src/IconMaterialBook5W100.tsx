import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5W100'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-132q-29 0-49.5-19T212-198v-527q0-29 20.5-50.5T282-803l338-73v568l-347 77q-13 3-23 11.5T240-198q0 17 12.5 27.5T282-160h438v-588h28v616H282Zm46-139 264-59v-511l-264 57v513Zm-28 6v-513l-18 4q-18 4-30 17.5T240-725v480q8-5 16-8.5t17-5.5l27-6Zm-60-504v524-524Z"/>
    </Icon>
  );
});

IconMaterialBook5W100.displayName = 'AmauiIconMaterialBook5W100';

export default IconMaterialBook5W100;
