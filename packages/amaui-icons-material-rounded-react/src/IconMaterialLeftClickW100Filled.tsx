import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftClickW100Filled'

      short_name='LeftClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M453 762q-69-11-115-63t-46-123q0-78 55-133t133-55q71 0 123 45.5T666 548l-31-9q-13-54-55.5-88.5T480 416q-66 0-113 47t-47 113q0 57 35 100t88 56l10 30Zm130-54-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T507 584l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6L583 708Z"/>
    </Icon>
  );
});

IconMaterialLeftClickW100Filled.displayName = 'AmauiIconMaterialLeftClickW100Filled';

export default IconMaterialLeftClickW100Filled;
