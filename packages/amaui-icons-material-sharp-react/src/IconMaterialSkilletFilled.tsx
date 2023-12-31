import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkilletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletFilled'

      short_name='Skillet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-320h560v-69l267-89 25 76-212 71v331H80Zm97-400q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm320 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm-160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Z"/>
    </Icon>
  );
});

IconMaterialSkilletFilled.displayName = 'AmauiIconMaterialSkilletFilled';

export default IconMaterialSkilletFilled;
