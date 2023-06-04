import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledW100'

      short_name='PersonAddDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.975 21.2-3.6-3.6v.6h-13.4v-1.3q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325.85 0 1.7.125t1.725.4l-3.15-3.15q-.05.025-.125.025h-.15q-1.125 0-1.912-.788-.788-.787-.788-1.912v-.15q0-.075.025-.125L2.475 4.7l.5-.5 16.5 16.5Zm-.65-7.85v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-7.15-3.8-.55-.55q.025-.125.038-.25.012-.125.012-.25 0-.825-.587-1.412Q9.5 6.5 8.675 6.5q-.125 0-.25.012-.125.013-.25.038L7.625 6q.25-.1.512-.15.263-.05.538-.05 1.125 0 1.913.788.787.787.787 1.912 0 .275-.05.537-.05.263-.15.513Zm-8.5 7.95h12v-.6l-1.45-1.45q-1.075-.475-2.225-.712-1.15-.238-2.325-.238-1.325 0-2.613.312-1.287.313-2.487.888-.425.225-.662.538-.238.312-.238.662Zm7.95-8.5Zm-1.95 5.5Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledW100.displayName = 'AmauiIconMaterialPersonAddDisabledW100';

export default IconMaterialPersonAddDisabledW100;
