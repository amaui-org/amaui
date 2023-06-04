import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftClickW100'

      short_name='LeftClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M453 762q-69-11-115-63t-46-123q0-78 55-133t133-55q71 0 123 45.5T666 548l-31-9q-13-54-55.5-88.5T480 416q-66 0-113 47t-47 113q0 57 35 100t88 56l10 30Zm328 145L583 708l-33 100-70-232 232 70-100 33 199 198-30 30Z"/>
    </Icon>
  );
});

IconMaterialLeftClickW100.displayName = 'AmauiIconMaterialLeftClickW100';

export default IconMaterialLeftClickW100;
