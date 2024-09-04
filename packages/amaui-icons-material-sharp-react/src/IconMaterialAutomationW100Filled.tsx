import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutomationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutomationW100Filled'

      short_name='Automation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257-172q-52 0-88.5-36T132-296q0-51 36.5-87.5T257-420q22 0 41 7t35 19l127-127-117-118q-14-14-20-29.5t-6-31.5q0-34 24.5-61t64.5-27h148q40 0 64 27t24 61q0 17-6 32.5T616-638L500-521l126 127q16-12 35.5-19t41.5-7q52 0 88.5 36.5T828-296q0 52-36.5 88T703-172q-53 0-89.5-36T577-296q0-22 7.5-42t21.5-37L480-501 354-374q14 17 21.5 36.5T383-296q0 52-37 88t-89 36Zm149-588q-27 0-43.5 18.5T346-700q0 11 4 22t13 20l117 117 117-117q9-9 13-20t4-22q0-23-16.5-41.5T554-760H406Z"/>
    </Icon>
  );
});

IconMaterialAutomationW100Filled.displayName = 'AmauiIconMaterialAutomationW100Filled';

export default IconMaterialAutomationW100Filled;
