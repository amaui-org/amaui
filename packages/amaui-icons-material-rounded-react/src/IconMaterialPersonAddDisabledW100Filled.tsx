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
      <path d="m18.725 20.95-3.35-3.35q-.05.275-.262.438-.213.162-.488.162h-11.9q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325.85 0 1.7.125t1.725.4l-3.15-3.15q-.05.025-.125.025h-.15q-1.125 0-1.912-.788-.788-.787-.788-1.912v-.15q0-.075.025-.125L2.725 4.95q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l16 16q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-.05-7.6q-.15 0-.25-.1t-.1-.25v-2.65h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V13q0 .15-.1.25t-.25.1Zm-7.5-3.8L7.625 6q.25-.1.512-.15.263-.05.538-.05 1.125 0 1.913.788.787.787.787 1.912 0 .275-.05.537-.05.263-.15.513Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledW100Filled.displayName = 'AmauiIconMaterialPersonAddDisabledW100Filled';

export default IconMaterialPersonAddDisabledW100Filled;
