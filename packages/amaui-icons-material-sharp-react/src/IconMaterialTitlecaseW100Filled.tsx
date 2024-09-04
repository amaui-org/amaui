import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitlecaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitlecaseW100Filled'

      short_name='Titlecase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M363-280v-350H244v-30h268v30H394v350h-31Zm330 9q-33 0-56-23.5T614-351v-157h-54v-28h54v-87h28v87h74v28h-74v154q0 23 15 39t36 16q5.14 0 10.57-.5Q709-300 716-302v27.86q-7 2.14-12.5 2.64t-10.5.5Z"/>
    </Icon>
  );
});

IconMaterialTitlecaseW100Filled.displayName = 'AmauiIconMaterialTitlecaseW100Filled';

export default IconMaterialTitlecaseW100Filled;
