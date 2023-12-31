import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdsFilled'

      short_name='Ods'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h160v-240H200v240Zm60-60v-120h40v120h-40Zm140 60h130l30-30v-180l-30-30H400v240Zm60-60v-120h40v120h-40Zm140 60h160v-146H660v-34h100v-60H600v144h100v36H600v60ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialOdsFilled.displayName = 'AmauiIconMaterialOdsFilled';

export default IconMaterialOdsFilled;
