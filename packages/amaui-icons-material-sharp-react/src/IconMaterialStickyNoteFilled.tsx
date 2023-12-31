import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteFilled'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120H120v-720h720v520L640-120Zm-40-80 160-160H600v160ZM440-320h80v-240h120v-80H320v80h120v240Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteFilled.displayName = 'AmauiIconMaterialStickyNoteFilled';

export default IconMaterialStickyNoteFilled;
