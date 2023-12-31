import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTsvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsvFilled'

      short_name='Tsv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-360h60v-180h50v-60H200v60h50v180Zm130 0h160v-146H440v-34h100v-60H380v144h100v36H380v60Zm250 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialTsvFilled.displayName = 'AmauiIconMaterialTsvFilled';

export default IconMaterialTsvFilled;
