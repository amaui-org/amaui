import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed05W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05W100'

      short_name='Speed05'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M427-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h114q14 0 23-9t9-23v-68q0-14-9-23t-23-9h-98q-12.75 0-21.37-8.5Q413-483 413-496.49v-127.02q0-13.49 8.63-21.99 8.62-8.5 21.37-8.5h144q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H441v132h100q26 0 43 17t17 43v68q0 26-17 43t-43 17H427Zm-94.04 0q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed05W100.displayName = 'AmauiIconMaterialSpeed05W100';

export default IconMaterialSpeed05W100;
