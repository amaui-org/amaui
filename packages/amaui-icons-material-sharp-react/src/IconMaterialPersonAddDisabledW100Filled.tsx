import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledW100Filled'

      short_name='PersonAddDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.975 21.2-3.6-3.6v.6h-13.4v-1.3q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325.85 0 1.7.125t1.725.4l-3.15-3.15q-.05.025-.125.025h-.15q-1.125 0-1.912-.788-.788-.787-.788-1.912v-.15q0-.075.025-.125L2.475 4.7l.5-.5 16.5 16.5Zm-.65-7.85v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-7.15-3.8L7.625 6q.25-.1.512-.15.263-.05.538-.05 1.125 0 1.913.788.787.787.787 1.912 0 .275-.05.537-.05.263-.15.513Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledW100Filled.displayName = 'AmauiIconMaterialPersonAddDisabledW100Filled';

export default IconMaterialPersonAddDisabledW100Filled;
