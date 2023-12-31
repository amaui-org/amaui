import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkilletCooktopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletCooktopW100'

      short_name='SkilletCooktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-394v-194h468v-64l224-76 9 26-205 69v239H172Zm28-28h440v-138H200v138Zm212 250v-114H132v-28h308v142h-28Zm108 0v-142h308v28H548v114h-28ZM420-491Z"/>
    </Icon>
  );
});

IconMaterialSkilletCooktopW100.displayName = 'AmauiIconMaterialSkilletCooktopW100';

export default IconMaterialSkilletCooktopW100;
